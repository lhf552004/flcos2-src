package com.enisco.flcos.server.dto.section;

import com.enisco.flcos.server.dto.line.LineDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewSectionDto {
    private Integer index;
    private String name;
    private LineDto line;
}
