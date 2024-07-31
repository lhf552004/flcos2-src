package com.enisco.flcos.server.runners;

import com.enisco.flcos.server.opc.server.OPCServerFactory;
import com.enisco.flcos.server.repository.relational.OPCServerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(value = 2)
public class OPCUAServerRunner implements CommandLineRunner {
    private static final Logger logger = LoggerFactory.getLogger(OPCUAServerRunner.class);
    @Autowired
    OPCServerFactory moduleFactory;

    @Autowired
    OPCServerRepository opcServerRepository;

    @Override
    public void run(String... args) throws Exception {
        logger.debug("OPCUA Servers loading");
        var opcServers = opcServerRepository.findAll();
        // TODO: load internal server
        moduleFactory.loadAllOPCServers(opcServers);
        logger.debug("OPCUA Servers loaded");
    }
}
