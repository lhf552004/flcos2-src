package com.enisco.flcos.server.dto.equipment;

import com.enisco.flcos.server.dto.DTOBase;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EquipmentDto extends DTOBase {
    private boolean locked;

    private String opcVariableIdent;

    private String location;

    private String plc;
}
