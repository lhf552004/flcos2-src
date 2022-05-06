package com.enisco.flcos.server.dto.recipe;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.NameDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class IngredientDto extends DTOBase {
    private NameDto product;

    private int percentage;

    private double targetWeight;

    private double actualWeight;

    private NameDto sender;

    private NameDto receiver;
}
