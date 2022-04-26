package com.enisco.flcos.server.dto.line;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.section.SectionDto;
import com.enisco.flcos.server.entities.enums.LineStatus;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class LineDto extends DTOBase {

    private String name;

    private Boolean isProduction;

    private LineStatus status;

    private List<SectionDto> sections;

    private Boolean svgUploaded;
}
