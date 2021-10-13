package com.enisco.flcos.server.runners;

import com.enisco.flcos.server.opc.client.*;
import com.enisco.flcos.server.opc.server.OPCServerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(value = 3)
public class OPCUAClientRunner implements CommandLineRunner {
    private final Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    OPCClientFactory clientFactory;
    @Override
    public void run(String... args) throws Exception {
        logger.debug("OPCUA clients initializing");
        clientFactory.initialize();
        logger.debug("OPCUA clients initialized");
    }
}
