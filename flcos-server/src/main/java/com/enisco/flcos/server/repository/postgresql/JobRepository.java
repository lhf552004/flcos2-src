package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.JobEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface JobRepository extends JpaRepository<JobEntity, Long> {
}
