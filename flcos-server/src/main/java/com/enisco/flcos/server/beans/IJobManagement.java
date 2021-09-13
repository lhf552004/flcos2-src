package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.entities.JobEntity;

import java.util.List;

public interface IJobManagement {
    List<String> checkJob(JobEntity job);
    String startJob(JobEntity job, Object ...parameters);
}
