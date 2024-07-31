package com.enisco.flcos.opc.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.concurrent.ExecutionException;

@SpringBootApplication
@EnableScheduling
public class OPCServerApplication {

    public static void main(String[] args) throws InterruptedException, ExecutionException {

        //Start Spring Boot Application to create IoT Container
        SpringApplication.run(OPCServerApplication.class, args);
    }

}
