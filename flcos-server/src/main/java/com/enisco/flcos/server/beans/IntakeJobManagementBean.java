package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.entities.JobEntity;
import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.enums.LineStatus;
import com.enisco.flcos.server.opc.OPCUAClient;
import com.enisco.flcos.server.repository.postgresql.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class IntakeJobManagementBean implements IJobManagement {
    Logger logger = LoggerFactory.getLogger(IntakeJobManagementBean.class);

    @Autowired
    OPCUAClient opcuaClient;

    @Autowired
    SectionRepository sectionRepository;

    @Autowired
    BinRepository binRepository;

    @Autowired
    JobRepository jobRepository;

    @Autowired
    LogisticUnitRepository logisticUnitRepository;

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
        var errors = new ArrayList<String>();
        var existed = logisticUnitRepository.findByBatchNumber(parameters[0].toString());
        if (existed.isEmpty()) {
            return String.format("LogisticUnit is not found by batch number.", parameters[0]);
        }else {
            var availableLogisticUnits = logisticUnitRepository.findByProduct(job.getRecipe().getProduct())
                    .stream().filter(logisticUnitEntity -> logisticUnitEntity.getActualWeight() > job.getTargetWeight()).collect(Collectors.toList());
            if(availableLogisticUnits.isEmpty()){
                return String.format("LogisticUnit is not found by batch number.", parameters[0]);
            }
        }
        var firstSectionQuery = job.getLine().getSections().stream().findFirst();
        if (firstSectionQuery.isPresent()) {
            var firstSection = firstSectionQuery.get();
            var jobIdNodeId = "";
            try {
                opcuaClient.setItemValue(jobIdNodeId, job.getId().toString());
                firstSection.setJob(job);
                sectionRepository.save(firstSection);

                var bulkStorages = binRepository.findByProduct(job.getRecipe().getProduct());
                if (!bulkStorages.isEmpty()) {
                    var theFirstBulk = bulkStorages.get(0);
                    theFirstBulk.setUsing(true);
                    binRepository.save(theFirstBulk);
                }

                job.setStatus(JobStatus.Running);
                jobRepository.save(job);
                // Consume the logistic unit
                var logisticUnit = existed.get();
                var remained = logisticUnit.getActualWeight() * logisticUnit.getUnit() - job.getTargetWeight();
                logisticUnit.setActualWeight(remained);
                logisticUnitRepository.save(logisticUnit);

            } catch (Exception ex) {
                logger.error(ex.getMessage());
                job.setStatus(JobStatus.Error);
                jobRepository.save(job);
                return ex.getMessage();
            }
        }
        return "";
    }
}
