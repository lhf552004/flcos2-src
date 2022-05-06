package com.enisco.flcos.server.dto.job;

import com.enisco.flcos.server.dto.NameDto;
import com.enisco.flcos.server.dto.recipe.RecipeDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewJobDto {
    private NameDto line;
    private RecipeDto recipe;
    private NameDto product;
}
