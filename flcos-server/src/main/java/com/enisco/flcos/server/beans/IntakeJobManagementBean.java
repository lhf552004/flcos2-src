package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.job.JobChangeLogEntity;
import com.enisco.flcos.server.entities.job.JobEntity;
import com.enisco.flcos.server.entities.enums.LineStatus;
import com.enisco.flcos.server.opc.client.OPCClientFactory;
import com.enisco.flcos.server.repository.relational.*;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

public class IntakeJobManagementBean implements IJobManagement {
    Logger logger = LoggerFactory.getLogger(IntakeJobManagementBean.class);

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

//    @Autowired
//    LogisticUnitRepository logisticUnitRepository;

    @Override
    public List<String> checkJob(JobEntity job) {
        var errors = new ArrayList();
        if (job != null) {
            if (job.getTargetWeight() <= 0) {
                errors.add("Job target weight should be positive.");
            }
            if (job.getLine() == null) {
                errors.add("job line is not set.");
            } else if (job.getLine().getStatus() != LineStatus.Passive) {
                errors.add("Line is not passive.");
            }
            if (job.getRecipe() == null || job.getRecipe().getIngredients() == null || job.getRecipe().getIngredients().isEmpty()) {
                errors.add("Recipe is not set.");
            }
        } else {
            errors.add("Job is empty.");
        }
        return errors;
    }

    @Override
    public String startJob(JobEntity job, Object... parameters) {
        changeJobStatus(job, JobStatus.Starting);
        var opcClient = opcClientFactory.getEndpointUrls().toArray()[0].toString();
        var sectionResult = job.getLine().getSections().stream().filter(s -> s.getIndex() == 0).findFirst();
        var recipe = job.getRecipe();
        var ingredient = recipe.getIngredients().get(0);
        var bins = binRepository.findByProductAndIsUsing(ingredient.getProduct(), false);
        var sender = bins.get(0).getSender();
        var receiver = bins.get(0).getReceiver();
        var targetWeight = ingredient.getTargetWeight();
        if(sectionResult.isPresent()) {
            var section = sectionResult.get();
            var variableNames = new ArrayList<String>();
            var variableValues = new ArrayList<>();
            var jobIdVariable = section.getOpcVariableIdent() + "/";
            variableNames.add(jobIdVariable);
            variableValues.add(job.getId().toString());
            var jobTargetWeightVariable = section.getOpcVariableIdent() + "/";
            variableNames.add(jobTargetWeightVariable);
            variableValues.add(targetWeight);
            variableNames.add(sender.getOpcVariableIdent());
            variableValues.add(true);
            try {
                opcClientFactory.WriteVariable(opcClient, variableNames, variableValues);
            } catch (ExecutionException | InterruptedException e) {
                changeJobStatus(job, JobStatus.Error);
                logger.error(e.getMessage(), e);
            }
        }

        return "";
    }

    @Override
    public void changeJobStatus(JobEntity job, JobStatus newStatus) {
        if(job.getStatus() != newStatus) {
            job.setStatus(newStatus);
            var newChangeLog = new JobChangeLogEntity();
            newChangeLog.setName("Status");
            newChangeLog.setOldValue(job.getStatus().name());
            newChangeLog.setNewValue(newStatus.name());
            job.getChangeLogs().add(newChangeLog);
            RepositoryUtil.update(jobRepository, job);
        }
    }

    @Override
    public void finishJob(JobEntity job) {
        job.setStatus(JobStatus.Done);
        var newChangeLog = new JobChangeLogEntity();
        newChangeLog.setName("Status");
        newChangeLog.setOldValue(job.getStatus().name());
        newChangeLog.setNewValue(JobStatus.Done.name());
        job.getChangeLogs().add(newChangeLog);
        RepositoryUtil.update(jobRepository, job);

    }
}
