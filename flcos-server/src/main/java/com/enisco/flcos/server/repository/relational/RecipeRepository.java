package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.ProductEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.enisco.flcos.server.entities.recipe.RecipeEntity;

import java.util.List;
import java.util.Optional;

public interface RecipeRepository extends JpaRepository<RecipeEntity, Long> {
    Optional<RecipeEntity> findByProductAndIsTemplate(ProductEntity product, Boolean isTemplate);

    List<RecipeEntity> findAllByIsTemplate(Pageable pageable, Boolean isTemplate);
}
