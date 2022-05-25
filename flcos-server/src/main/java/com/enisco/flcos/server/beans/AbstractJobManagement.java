package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.dto.job.MessageDto;
import com.enisco.flcos.server.dto.job.NewJobDto;
import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.enums.LineStatus;
import com.enisco.flcos.server.entities.job.JobChangeLogEntity;
import com.enisco.flcos.server.entities.job.JobEntity;
import com.enisco.flcos.server.opc.client.OPCClientFactory;
import com.enisco.flcos.server.repository.relational.*;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

public abstract class AbstractJobManagement implements IJobManagement {
    @Autowired
    SectionRepository sectionRepository;

    @Autowired
    BinRepository binRepository;

    @Autowired
    JobRepository jobRepository;

    @Autowired
    JobChangeLogRepository jobChangeLogRepository;

    @Autowired
    OPCClientFactory opcClientFactory;

    @Value("${online.mode}")
    private boolean onLineMode;

    protected ModelMapper modelMapper = new ModelMapper();

    protected MessageDto getNewMessage() {
        var message = new MessageDto();
        var errors = new ArrayList<String>();
        var infos = new ArrayList<String>();
        message.setErrors(errors);
        message.setInfos(infos);
        return message;
    }

    @Override
    public MessageDto checkJob(JobEntity job) {
       var message = getNewMessage();
        if(job != null){
            if(job.getTargetWeight() <= 0){
                message.getErrors().add("Job target weight should be positive.");
            }
            if(job.getLine() == null) {
                message.getErrors().add("job line is not set.");
            }
            else if (job.getLine().getStatus() != LineStatus.Passive) {
                message.getErrors().add("Line is not passive.");
            }
            if(job.getRecipe() == null || job.getRecipe().getIngredients() == null || job.getRecipe().getIngredients().isEmpty()) {
                message.getErrors().add("Recipe is not set.");
            }else if(job.getRecipe().getProduct() == null) {
                message.getErrors().add("Product is not set in recipe");
            }
        }else {
            message.getErrors().add("Job is empty.");
        }
        return message;
    }

    @Override
    public MessageDto startJob(JobEntity job, Object... parameters) {
        var messageDto = checkJob(job);
        if(!messageDto.getErrors().isEmpty()) {
            return messageDto;
        }
        try{
            changeJobStatus(job, JobStatus.Starting);


            var sectionResult = job.getLine().getSections().stream().filter(s -> s.getIndex() == 0).findFirst();
            var recipe = job.getRecipe();
            var ingredients = recipe.getIngredients();
            ingredients.forEach(ingredient -> {
                ingredient.getSender().setUsing(true);
                ingredient.getReceiver().setUsing(true);
                RepositoryUtil.update(binRepository, ingredient.getSender());
                RepositoryUtil.update(binRepository, ingredient.getReceiver());
            });

            if(sectionResult.isPresent()) {
                var section = sectionResult.get();
                if(onLineMode) {
                    var variableNames = new ArrayList<String>();
                    var variableValues = new ArrayList<>();
                    var jobIdVariable = section.getOpcVariableIdent() + "/jobId";
                    variableNames.add(jobIdVariable);
                    variableValues.add(job.getId().toString());
                    var jobTargetWeightVariable = section.getOpcVariableIdent() + "/";
                    variableNames.add(jobTargetWeightVariable);
                    variableValues.add(job.getTargetWeight());
                    ingredients.forEach(ingredient -> {
                        var bin = ingredient.getReceiver();
                        variableNames.add(bin.getOpcVariableIdent() + "/target");
                        variableValues.add(ingredient.getTargetWeight());
                    });
                    var opcClient = opcClientFactory.getEndpointUrls().toArray()[0].toString();
                    opcClientFactory.WriteVariable(opcClient, variableNames, variableValues);
                }
                changeJobStatus(job, JobStatus.Running);
                messageDto.getInfos().add("Job start successfully.");
            }
        }catch (Exception e) {
            changeJobStatus(job, JobStatus.Error);
            getLogger().error(e.getMessage(), e);
            messageDto.getErrors().add(e.getMessage());
        }
        return messageDto;
    }

    @Override
    public void changeJobStatus(JobEntity job, JobStatus newStatus) {
        if(job.getStatus() != newStatus) {
            job.setStatus(newStatus);
            var newChangeLog = new JobChangeLogEntity();
            newChangeLog.setName("Status");
            newChangeLog.setOldValue(job.getStatus().name());
            newChangeLog.setNewValue(newStatus.name());
            newChangeLog.setJob(job);
            RepositoryUtil.assignCreator(newChangeLog);
//            job.getChangeLogs().add(newChangeLog);
            RepositoryUtil.update(jobRepository, job);
        }
    }

    @Override
    public void finishJob(JobEntity job) {
        job.getRecipe().getIngredients().forEach(ingredient -> {
            ingredient.getSender().setUsing(false);
            ingredient.getReceiver().setUsing(false);
            RepositoryUtil.update(binRepository, ingredient.getSender());
            RepositoryUtil.update(binRepository, ingredient.getReceiver());
        });
        job.setStatus(JobStatus.Done);
        var newChangeLog = new JobChangeLogEntity();
        newChangeLog.setName("Status");
        newChangeLog.setOldValue(job.getStatus().name());
        newChangeLog.setNewValue(JobStatus.Done.name());
        newChangeLog.setJob(job);
        RepositoryUtil.assignCreator(newChangeLog);
//        job.getChangeLogs().add(newChangeLog);
        RepositoryUtil.update(jobRepository, job);
    }
}
