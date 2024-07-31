package com.enisco.flcos.server.dto.recipe;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.NameDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RecipeDto extends DTOBase {
    private boolean isTemplate;
    private String name;
    private NameDto line;
    private NameDto job;
    private NameDto product;
    private List<IngredientDto> ingredients;
}
