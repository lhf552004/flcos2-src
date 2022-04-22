package com.enisco.flcos.server.dto.equipment;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.entities.enums.EquipmentType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EquipmentDto extends DTOBase {
    private EquipmentType equipmentType;
}
