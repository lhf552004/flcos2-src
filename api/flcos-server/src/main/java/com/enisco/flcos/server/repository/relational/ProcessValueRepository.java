package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.trending.ProcessValueEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProcessValueRepository extends JpaRepository<ProcessValueEntity, Long> {
}
