package com.enisco.flcos.server.entities.job;

import com.enisco.flcos.server.entities.ChangeLog;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Getter
@Setter
@Entity(name = "job_change_log")
public class JobChangeLogEntity extends ChangeLog {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "JOB_ID", nullable = false)
    private JobEntity job;
}
