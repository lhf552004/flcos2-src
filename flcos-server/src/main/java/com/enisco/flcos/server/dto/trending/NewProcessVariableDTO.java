package com.enisco.flcos.server.dto.trending;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewProcessVariableDTO {
    private String variableName;

    private Float highHigh;

    private Float high;

    private Float low;

    private Float lowLow;

    private String plc;

    private String device;

    private String type;
}
