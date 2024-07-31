package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.ProcessStationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProcessStationRepository extends JpaRepository<ProcessStationEntity, Long> {
}
