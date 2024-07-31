package com.enisco.flcos.server.dto.opcs;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class WriteVariableDto {
    private String endpointUrl;
    private List<String> nodeIds;
    private List<Object> values;
}
