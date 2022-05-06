package com.enisco.flcos.server.dto.recipe;

import com.enisco.flcos.server.dto.NameDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewIngredientDto {
    private NameDto product;

    private int percentage;

    private NameDto sender;

    private NameDto receiver;
}
