package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.MenuEntity;
import com.enisco.flcos.server.entities.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MenuRepository extends JpaRepository<MenuEntity, Long> {
    List<MenuEntity> findByRole(RoleEntity role);

    @Query("select o from menu o where o.id in (:ids)")
    List<MenuEntity> findByIds(@Param("ids") List<Long> ids);
}
