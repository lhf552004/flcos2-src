package com.enisco.flcos.server.dto.opcs;

import com.enisco.flcos.server.dto.DTOBase;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OpcServerDTO extends DTOBase {

    private String status;

    private String name;

    private String address;

    private boolean internal;

    private Integer tcpPort;

    private Integer httpsPort;
}
