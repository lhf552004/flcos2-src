package com.enisco.flcos.server.api;

import com.enisco.flcos.server.services.NotificationServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;

@RestController
public class SSEController {
    Logger logger = LoggerFactory.getLogger(SSEController.class);
    @Autowired
    NotificationServiceImpl notificationService;

    @GetMapping(path = "/stream")
    public SseEmitter stream() {
        logger.info("SSE client initializing");
        var sseEmitter = notificationService.initSseEmitters();
        logger.info("SSE client initialized");
        return sseEmitter;
    }
}
