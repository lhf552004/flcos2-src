package com.enisco.flcos.sdk.dto.opcs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewOpcServerDTO {
    private String name;

    private String address;

    private boolean internal;

    private Integer tcpPort;

    private Integer httpsPort;

    private String configPath;
}
