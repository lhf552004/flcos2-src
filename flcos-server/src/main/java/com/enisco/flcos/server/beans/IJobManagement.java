package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.job.JobEntity;
import org.slf4j.Logger;

import java.util.List;

public interface IJobManagement {
    List<String> checkJob(JobEntity job);
    String startJob(JobEntity job, Object ...parameters);

    void changeJobStatus(JobEntity job, JobStatus newStatus);

    void finishJob(JobEntity job);

    Logger getLogger();
}
