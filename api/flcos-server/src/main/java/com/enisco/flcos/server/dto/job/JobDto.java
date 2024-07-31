package com.enisco.flcos.server.dto.job;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.NameDto;
import com.enisco.flcos.server.dto.recipe.RecipeDto;
import com.enisco.flcos.server.dto.line.LineDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobDto extends DTOBase {

    private String name;

    private NameDto line;

    private RecipeDto recipe;

    private double targetWeight;

    private double actualWeight;

    private String status;
}
