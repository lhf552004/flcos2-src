package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.bin.LayerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LayerRepository extends JpaRepository<LayerEntity, Long> {
}
