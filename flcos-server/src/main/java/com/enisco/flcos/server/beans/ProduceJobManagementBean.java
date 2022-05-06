package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.dto.job.NewJobDto;
import com.enisco.flcos.server.entities.job.JobEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class ProduceJobManagementBean extends AbstractJobManagement {
    Logger logger = LoggerFactory.getLogger(ProduceJobManagementBean.class);

    @Override
    public Logger getLogger() {
        return logger;
    }

    @Override
    public JobEntity createJob(NewJobDto newJobDto) {
        // TODO: create production job
        return null;
    }
}
