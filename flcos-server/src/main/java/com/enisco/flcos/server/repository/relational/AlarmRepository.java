package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.alarm.AlarmEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlarmRepository extends JpaRepository<AlarmEntity, Long> {
    List<AlarmEntity> findTopByActive(boolean active);
    List<AlarmEntity> findByActive(boolean active, Pageable pageable);
}
