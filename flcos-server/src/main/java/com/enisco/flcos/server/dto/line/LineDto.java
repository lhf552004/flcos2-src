package com.enisco.flcos.server.dto.line;

import com.enisco.flcos.server.dto.SectionDTO;
import com.enisco.flcos.server.entities.SectionEntity;
import com.enisco.flcos.server.entities.enums.LineStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
public class LineDto {
    private Long id;

    private String name;

    private Boolean isProduction;

    private LineStatus status;

    private List<SectionDTO> sections;

    private Boolean svgUploaded;
}
