package com.enisco.flcos.server.dto.trending;

import com.enisco.flcos.server.dto.DTOBase;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProcessVariableDTO extends DTOBase {
    private String variableName;

    private Float highHigh;

    private Float high;

    private Float low;

    private Float lowLow;

    private String plc;

    private String device;

    private String type;
}
