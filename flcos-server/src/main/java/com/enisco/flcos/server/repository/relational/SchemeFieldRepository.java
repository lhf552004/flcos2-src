package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.scheme.SchemeFieldEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SchemeFieldRepository extends JpaRepository<SchemeFieldEntity, Long> {
    Optional<SchemeFieldEntity> findByFieldName(String fieldName);
}
