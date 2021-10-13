package com.enisco.flcos.sdk.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;

@Setter
@Getter
@Entity(name="opc_server")
public class OPCServerEntity extends EntityBase {
    @Column
    private String name;
    @Column
    private String status;
    @Column
    private boolean internal;
    @Column
    private String address;
    @Column(name = "tcp_port")
    private Integer tcpPort;
    @Column(name = "https_port")
    private Integer httpsPort;
    @Column(name = "config_path")
    private String configPath;
}
