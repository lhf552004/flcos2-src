package com.enisco.flcos.server.repository.postgresql;

import org.springframework.data.jpa.repository.JpaRepository;
import com.enisco.flcos.server.entities.RecipeEntity;

public interface RecipeRepository extends JpaRepository<RecipeEntity, Long> {
}
