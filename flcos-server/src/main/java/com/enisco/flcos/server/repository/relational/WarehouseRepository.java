package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.EquipmentEntity;
import com.enisco.flcos.server.entities.WarehouseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WarehouseRepository extends JpaRepository<WarehouseEntity, Long> {
}
