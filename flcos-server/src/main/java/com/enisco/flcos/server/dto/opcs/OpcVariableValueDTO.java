package com.enisco.flcos.server.dto.opcs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OpcVariableValueDTO {
    private Object value;
    private String type;
}
