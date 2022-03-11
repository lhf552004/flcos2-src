package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.job.JobChangeLogEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobChangeLogRepository extends JpaRepository<JobChangeLogEntity, Long> {
}
