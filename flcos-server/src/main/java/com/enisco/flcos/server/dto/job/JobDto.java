package com.enisco.flcos.server.dto.job;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.recipe.RecipeDto;
import com.enisco.flcos.server.dto.line.LineDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobDto extends DTOBase {

    private String name;

    private LineDto line;

    private RecipeDto recipe;

    private long targetWeight;

    private long actualWeight;

    private String status;
}
