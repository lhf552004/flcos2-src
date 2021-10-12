package com.enisco.flcos.server.runners;

import com.enisco.flcos.server.opc.server.OPCServerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Component
@Order(value = 2)
public class OPCUAServerRunner implements CommandLineRunner {
    private static final Logger logger = LoggerFactory.getLogger(OPCUAServerRunner.class);
    @Autowired
    OPCServerFactory moduleFactory;
    @Override
    public void run(String... args) throws Exception {
//        Path modFolder = Paths.get("C:\\tmp\\mod");
//        List<Path> folders = new ArrayList<>();
//        folders.add(modFolder);
//        moduleFactory.loadAllOPCServers(folders);
//        logger.debug("OPCUA Servers started");
//        ExampleServer.getInstance().run();
    }
}
