package com.enisco.flcos.server.beans;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class IntakeJobManagementBean extends AbstractJobManagement {
    Logger logger = LoggerFactory.getLogger(IntakeJobManagementBean.class);

    @Override
    public Logger getLogger() {
        return logger;
    }

}
