package com.enisco.flcos.server.dto.section;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.JobDto;

import com.enisco.flcos.server.dto.equipment.EquipmentDto;
import com.enisco.flcos.server.dto.line.LineDto;
import com.enisco.flcos.server.entities.enums.LineStatus;
import com.enisco.flcos.server.entities.job.JobEntity;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SectionDto extends DTOBase {
    private Integer index;
    private String name;
    private LineStatus status;
    private boolean isManual;
    private boolean isHold;
    private LineDto line;
    private JobDto job;
    private List<EquipmentDto> equipments;
}
