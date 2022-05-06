package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.LineEntity;
import com.enisco.flcos.server.entities.job.JobEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRepository extends JpaRepository<JobEntity, Long> {
    List<JobEntity> findByLine(LineEntity line, Pageable pageable);
}
