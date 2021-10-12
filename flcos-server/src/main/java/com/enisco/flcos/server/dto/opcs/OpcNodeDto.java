package com.enisco.flcos.server.dto.opcs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OpcNodeDto {
    private String browserName;
    private String nodeId;
    private String nodeClass;
    private String description;
    private Object value;
}
