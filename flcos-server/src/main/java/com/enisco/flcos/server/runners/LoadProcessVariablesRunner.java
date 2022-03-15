package com.enisco.flcos.server.runners;

import com.enisco.flcos.server.entities.scheme.SchemeEntity;
import com.enisco.flcos.server.entities.scheme.SchemeFieldEntity;
import com.enisco.flcos.server.repository.relational.SchemeFieldRepository;
import com.enisco.flcos.server.repository.relational.SchemeRepository;
import com.enisco.flcos.server.services.ProcessValueService;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Order(value = 0)
@Component
public class LoadProcessVariablesRunner implements CommandLineRunner {
    Logger logger = LoggerFactory.getLogger(LoadProcessVariablesRunner.class);

    @Autowired
    ProcessValueService processValueService;

    @Override
    public void run(String... args) {
        logger.info("Start to run initialize process variable runner...");
        processValueService.getAllVariableDef();
    }
}
