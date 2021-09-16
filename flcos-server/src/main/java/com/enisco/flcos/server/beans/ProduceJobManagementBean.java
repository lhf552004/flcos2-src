package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.entities.job.JobEntity;
import com.enisco.flcos.server.entities.enums.LineStatus;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ProduceJobManagementBean implements IJobManagement {
    public List<String> checkJob(JobEntity job) {
        var errors = new ArrayList();
        if(job != null){
            if(job.getTargetWeight() <= 0){
                errors.add("Job target weight should be positive.");
            }
            if(job.getLine() == null) {
                errors.add("job line is not set.");
            }
            else if (job.getLine().getStatus() != LineStatus.Passive) {
                errors.add("Line is not passive.");
            }
            if(job.getRecipe() == null || job.getRecipe().getIngredients() == null || job.getRecipe().getIngredients().isEmpty()) {
                errors.add("Recipe is not set.");
            }
        }else {
            errors.add("Job is empty.");
        }
        return errors;
    }

    public String startJob(JobEntity job, Object ...parameters) {
        return "";
    }
}
