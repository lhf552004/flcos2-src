package com.enisco.flcos.server.api;

import com.enisco.flcos.server.services.NotificationServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;

@RestController
@RequestMapping("api/v1/stream")
public class SSEController {
    Logger logger = LoggerFactory.getLogger(SSEController.class);
    @Autowired
    NotificationServiceImpl notificationService;

    @CrossOrigin
    @RequestMapping(path = "/init", method = RequestMethod.GET)
    public SseEmitter stream() throws IOException {
        logger.info("SSE client initializing");
        return notificationService.initSseEmitters();
    }
}
