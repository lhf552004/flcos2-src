package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.LogisticUnitEntity;
import com.enisco.flcos.server.entities.WarehouseEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LogisticUnitRepository extends JpaRepository<LogisticUnitEntity, Long> {
    List<LogisticUnitEntity> findByBatchNumber(String batchNumber);
    List<LogisticUnitEntity> findByWarehouse(WarehouseEntity warehouse, Pageable pageable);
}
