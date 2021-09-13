package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.JobEntity;
import com.enisco.flcos.server.entities.LogisticUnitEntity;
import com.enisco.flcos.server.entities.ProductEntity;
import com.enisco.flcos.server.entities.ReceiptEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LogisticUnitRepository extends JpaRepository<LogisticUnitEntity, Long> {
    Optional<LogisticUnitEntity> findByBatchNumber(String batchNumber);
    List<LogisticUnitEntity> findByProduct(ProductEntity product);
}
