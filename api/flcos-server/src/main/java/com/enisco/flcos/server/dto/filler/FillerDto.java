package com.enisco.flcos.server.dto.filler;

import com.enisco.flcos.server.dto.bin.BinDto;
import com.enisco.flcos.server.dto.equipment.EquipmentDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FillerDto extends EquipmentDto {
    private String name;

    private String category;

    private BinDto bin;
}
