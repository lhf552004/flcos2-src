package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.dto.job.MessageDto;
import com.enisco.flcos.server.dto.job.NewJobDto;
import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.job.JobEntity;
import org.slf4j.Logger;

public interface IJobManagement {
    JobEntity createJob(NewJobDto jobDto);
    MessageDto checkJob(JobEntity job);
    MessageDto startJob(JobEntity job, Object ...parameters);

    void changeJobStatus(JobEntity job, JobStatus newStatus);

    void finishJob(JobEntity job);

    Logger getLogger();
}
