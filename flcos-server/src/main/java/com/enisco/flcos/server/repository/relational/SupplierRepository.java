package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.SupplierEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<SupplierEntity, Long> {
}
