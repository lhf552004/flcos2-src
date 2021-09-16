package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.scheme.SchemeFieldEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SchemeFieldRepository extends JpaRepository<SchemeFieldEntity, Long> {
}
