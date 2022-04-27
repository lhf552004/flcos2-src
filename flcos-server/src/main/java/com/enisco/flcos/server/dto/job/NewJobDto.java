package com.enisco.flcos.server.dto.job;

import com.enisco.flcos.server.dto.line.LineDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewJobDto {
    private LineDto line;
}
