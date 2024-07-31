package com.enisco.flcos.server.services;

import com.enisco.flcos.server.dto.opcs.OPCVariableChangedDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;


public interface NotificationService {
    public SseEmitter initSseEmitters();
    public void sendSseEventsToUI(OPCVariableChangedDTO notification);
}
