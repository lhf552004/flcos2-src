package com.enisco.flcos.server.beans.job;

import com.enisco.flcos.server.beans.CommandType;
import com.enisco.flcos.server.dto.job.MessageDto;
import com.enisco.flcos.server.entities.recipe.IngredientEntity;
import com.enisco.flcos.server.entities.LineEntity;
import com.enisco.flcos.server.entities.recipe.RecipeEntity;
import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.enums.LineStatus;
import com.enisco.flcos.server.entities.job.JobChangeLogEntity;
import com.enisco.flcos.server.entities.job.JobEntity;
import com.enisco.flcos.server.exceptions.FLCosException;
import com.enisco.flcos.server.opc.client.OPCClientFactory;
import com.enisco.flcos.server.repository.relational.*;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

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

    @Autowired
    LineRepository lineRepository;

    @Autowired
    RecipeRepository recipeRepository;

    @Value("${online.mode}")
    private boolean onlineMode;

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
        if (job != null) {
            if (job.getTargetWeight() <= 0) {
                message.getErrors().add("Job target weight should be positive.");
            }
            if (job.getLine() == null) {
                message.getErrors().add("job line is not set.");
            } else if (job.getLine().getStatus() != LineStatus.Passive) {
                message.getErrors().add("Line is not passive.");
            }
            if (job.getRecipe() == null || job.getRecipe().getIngredients() == null || job.getRecipe().getIngredients().isEmpty()) {
                message.getErrors().add("Recipe is not set.");
            } else if (job.getRecipe().getProduct() == null) {
                message.getErrors().add("Product is not set in recipe");
            }
        } else {
            message.getErrors().add("Job is empty.");
        }
        return message;
    }

    @Override
    public MessageDto startJob(JobEntity job, Object... parameters) {
        var messageDto = checkJob(job);
        if (!messageDto.getErrors().isEmpty()) {
            return messageDto;
        }
        try {
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

            if (sectionResult.isPresent()) {
                var section = sectionResult.get();
                if (onlineMode) {
                    var variableNames = new ArrayList<String>();
                    var variableValues = new ArrayList<>();
                    var jobIdVariable = section.getOpcVariableIdent() + "write/jobId";
                    variableNames.add(jobIdVariable);
                    variableValues.add(job.getId().toString());
                    var jobTargetWeightVariable = section.getMixers().get(0).getOpcVariableIdent() + "write/target";
                    variableNames.add(jobTargetWeightVariable);
                    variableValues.add(job.getTargetWeight());
                    ingredients.forEach(ingredient -> {
                        var bin = ingredient.getReceiver();
                        variableNames.add(bin.getOpcVariableIdent() + "write/target");
                        variableValues.add(ingredient.getTargetWeight());
                    });
                    var opcClient = opcClientFactory.getEndpointUrls().toArray()[0].toString();
                    opcClientFactory.WriteVariable(opcClient, variableNames, variableValues);
                }
                section.setStatus(LineStatus.Running);
                section.setJob(job);
                RepositoryUtil.update(sectionRepository, section);
                changeJobStatus(job, JobStatus.Running);
                messageDto.getInfos().add("Job start successfully.");
            }
        } catch (Exception e) {
            changeJobStatus(job, JobStatus.Error);
            getLogger().error(e.getMessage(), e);
            messageDto.getErrors().add(e.getMessage());
        }
        return messageDto;
    }

    @Override
    public void changeJobStatus(JobEntity job, JobStatus newStatus) {
        if (job.getStatus() != newStatus) {
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
    public MessageDto pauseJob(JobEntity job) {
        var messageDto = getNewMessage();
        changeJobStatus(job, JobStatus.Suspending);
        if (onlineMode) {
            var sections = job.getLine().getSections().stream().filter(s -> s.getJob() != null && s.getJob().getId().equals(job.getId())).collect(Collectors.toList());
            if (!sections.isEmpty()) {
                var section = sections.get(0);
                var variableNames = new ArrayList<String>();
                var variableValues = new ArrayList<>();
                var sectionCommand = section.getOpcVariableIdent() + "write/cmd";
                variableNames.add(sectionCommand);
                variableValues.add(CommandType.Pause);
                var opcClient = opcClientFactory.getEndpointUrls().toArray()[0].toString();
                try {
                    opcClientFactory.WriteVariable(opcClient, variableNames, variableValues);
                } catch (ExecutionException | InterruptedException e) {
                    messageDto.getErrors().add(e.getMessage());
                    changeJobStatus(job, JobStatus.Error);
                }
            }
        }
        changeJobStatus(job, JobStatus.Suspended);
        return messageDto;
    }

    @Override
    public MessageDto finishJob(JobEntity job) {
        var messageDto = getNewMessage();
        var line = job.getLine();
        var sectionResult = line.getSections().stream().filter(s -> s.getJob() != null && s.getJob().getId().equals(job.getId())).findFirst();
        if (onlineMode) {
            if (sectionResult.isPresent()) {
                var section = sectionResult.get();
                var variableNames = new ArrayList<String>();
                var variableValues = new ArrayList<>();
                var sectionCommand = section.getOpcVariableIdent() + "write/cmd";
                variableNames.add(sectionCommand);
                variableValues.add(CommandType.Finish);
                var opcClient = opcClientFactory.getEndpointUrls().toArray()[0].toString();
                try {
                    opcClientFactory.WriteVariable(opcClient, variableNames, variableValues);
                } catch (ExecutionException | InterruptedException e) {
                    changeJobStatus(job, JobStatus.Error);
                    line.setStatus(LineStatus.Error);
                    RepositoryUtil.update(lineRepository, line);
                    messageDto.getErrors().add(e.getMessage());
                }
            }else {
                messageDto.getErrors().add("Section not found with job");
            }

        } else {
            setJobFinished(job);
        }
        return messageDto;
    }

    public void setJobFinished(JobEntity job) {
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

    protected RecipeEntity cloneRecipe(RecipeEntity template, JobEntity jobEntity) {
        var newRecipe = new RecipeEntity();
        newRecipe.setLine(template.getLine());
        newRecipe.setProduct(template.getProduct());
        newRecipe.setJob(jobEntity);
        newRecipe.setName(template.getName());
        newRecipe.setTemplate(false);
        newRecipe.setIngredients(template.getIngredients().stream().map(ingredientEntity -> {
            var newIngredient = new IngredientEntity();
            newIngredient.setReceiver(ingredientEntity.getReceiver());
            newIngredient.setSender(ingredientEntity.getSender());
            newIngredient.setProduct(ingredientEntity.getProduct());
            newIngredient.setPercentage(ingredientEntity.getPercentage());
            newIngredient.setTargetWeight(ingredientEntity.getTargetWeight());
            return newIngredient;
        }).collect(Collectors.toList()));
        return newRecipe;
    }


    @Override
    public void moveToNextSection(LineEntity lineEntity) {
        if (lineEntity.getStatus().equals(LineStatus.Running)) {
            var activeSections = lineEntity
                    .getSections()
                    .stream()
                    .filter(sectionEntity ->
                            sectionEntity.
                                    getStatus()
                                    .equals(LineStatus.Running))
                    .collect(Collectors.toList());
            if (!activeSections.isEmpty()) {
                var activeSection = activeSections.get(0);
                var job = activeSection.getJob();
                if (job == null) {
                    throw new FLCosException("Job is empty for running section");
                }
                var nextSections = lineEntity
                        .getSections()
                        .stream()
                        .filter(sectionEntity ->
                                sectionEntity.
                                        getIndex().equals(activeSection.getIndex() + 1))
                        .collect(Collectors.toList());
                if (!nextSections.isEmpty()) {
                    var nextSection = nextSections.get(0);
                    if (!nextSection.getStatus().equals(LineStatus.Passive)) {
                        return;
                    }
                    nextSection.setStatus(LineStatus.Running);
                    if (onlineMode) {
                        try {
                            var variableNames = new ArrayList<String>();
                            var variableValues = new ArrayList<>();
                            var jobIdVariable = nextSection.getOpcVariableIdent() + "/jobId";
                            variableNames.add(jobIdVariable);
                            variableValues.add(job.getId().toString());
                            var opcClient = opcClientFactory.getEndpointUrls().toArray()[0].toString();
                            opcClientFactory.WriteVariable(opcClient, variableNames, variableValues);
                        } catch (InterruptedException | ExecutionException ex) {
                            nextSection.setStatus(LineStatus.Error);
                            getLogger().error(ex.getMessage());
                        }
                    } else {
                        activeSection.setStatus(LineStatus.Passive);
                        RepositoryUtil.update(sectionRepository, activeSection);
                    }
                    RepositoryUtil.update(sectionRepository, nextSection);
                }
            }
        }
    }
}
