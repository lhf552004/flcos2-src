package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.MixerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MixerRepository extends JpaRepository<MixerEntity, Long> {
}
