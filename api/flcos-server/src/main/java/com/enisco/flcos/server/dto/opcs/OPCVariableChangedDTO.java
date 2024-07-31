package com.enisco.flcos.server.dto.opcs;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class OPCVariableChangedDTO {
    private String nodeId;
    private Object newValue;
}
