package com.enisco.flcos.server.dto.scale;

import com.enisco.flcos.server.dto.processstation.ProcessStationDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ScaleDto extends ProcessStationDto {
    private String category;

    private double unit;

    private int componentNoMaxCfg;

    private double capacity;

    private double dosingAmountMin;

    private double dosingAmountMax;

    private double weightMax;

    private double ingredientWeightTarget;

    private double ingredientWeightActual;

    private int ingredientNumberCurrent;
}
