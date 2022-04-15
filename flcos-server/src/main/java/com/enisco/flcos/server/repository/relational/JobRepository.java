package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.job.JobEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<JobEntity, Long> {
}
