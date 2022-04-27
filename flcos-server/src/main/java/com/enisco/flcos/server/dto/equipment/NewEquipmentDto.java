package com.enisco.flcos.server.dto.equipment;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewEquipmentDto {
    private boolean locked;

    private String opcVariableIdent;

    private String location;

    private String plc;
}
