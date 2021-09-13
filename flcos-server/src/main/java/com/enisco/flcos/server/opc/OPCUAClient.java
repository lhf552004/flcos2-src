package com.enisco.flcos.server.opc;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;

@Singleton
@Startup
public class OPCUAClient {

    @PostConstruct
    public void initialize() {

    }

    public void setItemValue(String nodeId, String value) {

    }

    public String getItemValue(String nodeId) {
        return "";
    }
}
