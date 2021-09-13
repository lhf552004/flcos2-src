package com.enisco.flcos.server.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobDto {
    private Long id;

    private String name;

    private LineDto line;

    private RecipeDto recipe;

    private long targetWeight;

    private String status;
}
