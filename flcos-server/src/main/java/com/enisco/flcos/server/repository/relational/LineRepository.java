package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.LineEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LineRepository extends JpaRepository<LineEntity, Long> {
    List<LineEntity> findByIsProduction(Boolean isProduction);
    Optional<LineEntity> findByName(String name);
}
