package com.enisco.flcos.server.dto.opcs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OpcServerDTO {
    private Long id;

    private String status;

    private String name;

    private String address;

    private boolean internal;

    private Integer tcpPort;

    private Integer httpsPort;
}
