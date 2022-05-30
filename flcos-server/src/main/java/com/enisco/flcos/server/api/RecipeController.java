package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.recipe.NewRecipeDto;
import com.enisco.flcos.server.dto.recipe.RecipeDto;
import com.enisco.flcos.server.dto.recipe.RecipeListDto;
import com.enisco.flcos.server.entities.recipe.RecipeEntity;
import com.enisco.flcos.server.repository.relational.RecipeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/recipes")
@RestController
public class RecipeController extends GenericControllerBase<RecipeEntity, RecipeDto, RecipeListDto, NewRecipeDto> {
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

    @GetMapping(path = "templates")
    public List<RecipeListDto> getTemplates(@RequestParam(required = false, defaultValue = "0") int page, @RequestParam(required = false, defaultValue = "30") int size, @RequestParam(required = false, defaultValue = "") String direct, @RequestParam(required = false, defaultValue = "id") String sortProperty) {
        return recipeRepository.findAllByIsTemplate(getPageable(page, size, direct, sortProperty), true)
                .stream()
                .map(entity -> modelMapper.map(entity, getListDtoClass()))
                .collect(Collectors.toList());
    }

}
