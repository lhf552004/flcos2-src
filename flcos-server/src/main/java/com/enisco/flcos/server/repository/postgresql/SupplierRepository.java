package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.ReceiptEntity;
import com.enisco.flcos.server.entities.SupplierEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<SupplierEntity, Long> {
}
