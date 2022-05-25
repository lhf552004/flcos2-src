package com.enisco.flcos.server.dto.section;

import com.enisco.flcos.server.dto.NameDto;
import com.enisco.flcos.server.dto.equipment.EquipmentDto;
import com.enisco.flcos.server.entities.enums.LineStatus;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SectionListDto extends EquipmentDto {
    private Integer index;
    private String name;
    private LineStatus status;
    private boolean isManual;
    private boolean isHold;
    private NameDto line;
    private NameDto job;

}
