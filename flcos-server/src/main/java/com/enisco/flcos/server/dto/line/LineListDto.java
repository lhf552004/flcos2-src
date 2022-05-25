package com.enisco.flcos.server.dto.line;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.equipment.EquipmentDto;
import com.enisco.flcos.server.entities.enums.LineStatus;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LineListDto extends DTOBase {

    private String name;

    private Boolean isProduction;

    private LineStatus status;

    private Boolean svgUploaded;
}
