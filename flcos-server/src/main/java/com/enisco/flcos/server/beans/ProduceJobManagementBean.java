package com.enisco.flcos.server.beans;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class ProduceJobManagementBean extends AbstractJobManagement {
    Logger logger = LoggerFactory.getLogger(ProduceJobManagementBean.class);

    @Override
    public Logger getLogger() {
        return logger;
    }
}
