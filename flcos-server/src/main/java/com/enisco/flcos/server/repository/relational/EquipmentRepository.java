package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.EquipmentEntity;
import com.enisco.flcos.server.entities.ProductEntity;
import com.enisco.flcos.server.entities.RecipeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EquipmentRepository extends JpaRepository<EquipmentEntity, Long> {
}
