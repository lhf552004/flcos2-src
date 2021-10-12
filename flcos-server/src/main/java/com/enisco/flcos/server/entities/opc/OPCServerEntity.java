package com.enisco.flcos.server.entities.opc;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Setter
@Getter
@Entity(name="opc_server")
public class OPCServerEntity extends EntityBase {
    private String name;
    private String status;
    private String endpointUrl;
}
