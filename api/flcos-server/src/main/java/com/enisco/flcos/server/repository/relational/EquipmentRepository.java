package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.EquipmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipmentRepository extends JpaRepository<EquipmentEntity, Long> {
}
