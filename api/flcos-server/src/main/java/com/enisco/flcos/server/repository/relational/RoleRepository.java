package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
}
