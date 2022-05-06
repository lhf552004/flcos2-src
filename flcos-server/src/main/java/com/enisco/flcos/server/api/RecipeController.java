package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.recipe.NewRecipeDto;
import com.enisco.flcos.server.dto.recipe.RecipeDto;
import com.enisco.flcos.server.entities.LogisticUnitEntity;
import com.enisco.flcos.server.entities.ReceiptEntity;
import com.enisco.flcos.server.entities.RecipeEntity;
import com.enisco.flcos.server.entities.WarehouseEntity;
import com.enisco.flcos.server.entities.enums.PackageType;
import com.enisco.flcos.server.repository.relational.LogisticUnitRepository;
import com.enisco.flcos.server.repository.relational.ReceiptRepository;
import com.enisco.flcos.server.repository.relational.RecipeRepository;
import com.enisco.flcos.server.repository.relational.WarehouseRepository;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/v1/recipes")
@RestController
public class RecipeController extends GenericControllerBase<RecipeEntity, RecipeDto, NewRecipeDto> {
    Logger logger = LoggerFactory.getLogger(RecipeController.class);

    private final RecipeRepository recipeRepository;

    @Autowired
    public RecipeController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @Override
    JpaRepository<RecipeEntity, Long> getRepository() {
        return recipeRepository;
    }

}
