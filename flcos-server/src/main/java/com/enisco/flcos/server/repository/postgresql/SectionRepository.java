package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.SectionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SectionRepository extends JpaRepository<SectionEntity, Long> {
}
