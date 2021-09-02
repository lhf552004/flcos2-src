package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.MenuEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<MenuEntity, Long> {
}
