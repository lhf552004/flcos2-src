package com.enisco.flcos.server.mapper;

import com.enisco.flcos.server.dto.NameDto;
import com.enisco.flcos.server.dto.job.JobDto;
import com.enisco.flcos.server.dto.recipe.IngredientDto;
import com.enisco.flcos.server.dto.recipe.RecipeDto;
import com.enisco.flcos.server.entities.job.JobEntity;
import org.modelmapper.ModelMapper;

import java.util.stream.Collectors;

public class JobMapper implements IFLCosMapper<JobEntity, JobDto>{
    protected ModelMapper modelMapper = new ModelMapper();
    @Override
    public JobDto map(JobEntity jobEntity) {
        var jobDto = new JobDto();
        MapperUtil.map(jobEntity, jobDto);
        jobDto.setName(jobEntity.getName());
        jobDto.setTargetWeight(jobEntity.getTargetWeight());
        jobDto.setActualWeight(jobEntity.getActualWeight());
        jobDto.setStatus(jobEntity.getStatus().name());
        var recipeEntity = jobEntity.getRecipe();
        var lineEntity = jobEntity.getLine();
        // Create line dto
        NameDto lineNameDto = null;
        if(lineEntity != null) {
            lineNameDto = new NameDto();
            lineNameDto.setId(lineEntity.getId());
            lineNameDto.setName(lineEntity.getName());
        }
        if(recipeEntity != null) {
            var recipeDto = new RecipeDto();
            MapperUtil.map(recipeEntity, recipeDto);
            recipeDto.setId(recipeEntity.getId());
            recipeDto.setName(recipeEntity.getName());
            recipeDto.setTemplate(recipeEntity.isTemplate());
            // Set job dto for recipe
            var jobNameDto = new NameDto();
            jobNameDto.setId(jobEntity.getId());
            jobNameDto.setName(jobEntity.getName());
            recipeDto.setJob(jobNameDto);
            // Set line dto for recipe
            recipeDto.setLine(lineNameDto);
            // Set product dto for recipe
            var productEntity = recipeEntity.getProduct();
            if(productEntity != null) {
                var productNameDto = new NameDto();
                productNameDto.setId(productEntity.getId());
                productNameDto.setName(productEntity.getName());
                recipeDto.setProduct(productNameDto);
            }
            recipeDto.setIngredients(recipeEntity.getIngredients().stream()
                    .map(entity -> modelMapper.map(entity, IngredientDto.class))
                    .collect(Collectors.toList()));
            jobDto.setRecipe(recipeDto);
        }
        jobDto.setLine(lineNameDto);
        return jobDto;
    }

    @Override
    public JobEntity map(JobDto jobDto) {
        return null;
    }
}
