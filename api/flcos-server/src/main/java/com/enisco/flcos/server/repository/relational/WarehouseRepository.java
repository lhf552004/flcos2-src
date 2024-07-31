package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.WarehouseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WarehouseRepository extends JpaRepository<WarehouseEntity, Long> {
    Optional<WarehouseEntity> findByName(String name);
}
