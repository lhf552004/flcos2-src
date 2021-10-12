package com.enisco.flcos.server.dto.opcs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewOpcServerDTO {
    private String name;
    private String endpointUrl;
}
