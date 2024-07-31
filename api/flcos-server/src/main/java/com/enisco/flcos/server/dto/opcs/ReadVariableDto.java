package com.enisco.flcos.server.dto.opcs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReadVariableDto {
    private String endPointUrl;
    private String nodeId;
}
