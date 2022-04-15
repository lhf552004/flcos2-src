package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.trending.ProcessVariableDefEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProcessVariableDefRepository extends JpaRepository<ProcessVariableDefEntity, Long> {
}
