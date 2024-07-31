package com.enisco.flcos.server.dto.opcs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QueryNodeDto {
    private String endpointUrl;
    private String nodeId;
    private String nodeClass;
}
