package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.MenuEntity;
import com.enisco.flcos.server.entities.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MenuRepository extends JpaRepository<MenuEntity, Long> {
    List<MenuEntity> findByRole(RoleEntity role);

    List<MenuEntity> findByIdIn(List<Long> ids);
}
