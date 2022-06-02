package com.enisco.flcos.server.beans.job;

import com.enisco.flcos.server.dto.job.MessageDto;
import com.enisco.flcos.server.dto.job.NewJobDto;
import com.enisco.flcos.server.entities.LineEntity;
import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.job.JobEntity;
import org.slf4j.Logger;

public interface IJobManagement {
    JobEntity createJob(NewJobDto jobDto);

    MessageDto checkJob(JobEntity job);

    MessageDto startJob(JobEntity job, Object... parameters);

    MessageDto pauseJob(JobEntity job);

    void changeJobStatus(JobEntity job, JobStatus newStatus);

    MessageDto finishJob(JobEntity job);

    void moveToNextSection(LineEntity lineEntity);

    Logger getLogger();
}
