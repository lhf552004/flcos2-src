package com.enisco.flcos.server.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SectionDTO {
    private String opcVariableIdent;

    private Integer index;

    private List<EquipmentDTO> equipments;

    private Boolean isManual;

    private Boolean isHold;

    private JobDto job;
}
