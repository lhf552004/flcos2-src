package com.enisco.flcos.server.dto.discharger;

import com.enisco.flcos.server.dto.bin.BinDto;
import com.enisco.flcos.server.dto.equipment.EquipmentDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DischargerDto extends EquipmentDto {
    private String name;

    private String category;

    private int priority;

    private BinDto bin;
}
