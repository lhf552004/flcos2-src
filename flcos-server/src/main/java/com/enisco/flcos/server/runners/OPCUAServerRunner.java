package com.enisco.flcos.server.runners;

import com.enisco.flcos.server.opc.server.ExampleServer;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(value = 2)
public class OPCUAServerRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        ExampleServer.run();
    }
}
