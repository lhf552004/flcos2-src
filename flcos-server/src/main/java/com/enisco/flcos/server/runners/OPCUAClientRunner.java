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
public class OPCUAClientRunner implements CommandLineRunner {
    private final Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    OPCServerFactory moduleFactory;
    @Override
    public void run(String... args) throws Exception {
        logger.debug("OPCUA clients started");
        logger.debug("OPCUA server counts: " + moduleFactory.getOpcServers().size());
//        moduleFactory.getOpcServers().forEach(flCosOPCServer -> {
//            BrowseAsyncExample subscriptionExample = new BrowseAsyncExample();
//            ClientExampleRunner clientExampleRunner = null;
//            try {
//                clientExampleRunner = new ClientExampleRunner(subscriptionExample,flCosOPCServer );
//                clientExampleRunner.run();
//            } catch (Exception exception) {
//                exception.printStackTrace();
//            }
//
//        });
        BrowseAsyncExample subscriptionExample = new BrowseAsyncExample();
        ClientExampleRunner clientExampleRunner = null;
        try {
            clientExampleRunner = new ClientExampleRunner(subscriptionExample );
            clientExampleRunner.run();
        } catch (Exception exception) {
            exception.printStackTrace();
        }
    }
}
