package com.enisco.flcos.server.services;

import com.enisco.flcos.server.dto.opcs.OPCVariableChangedDTO;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class NotificationServiceImpl {

    private final List<SseEmitter> sseEmitters = Collections.synchronizedList(new ArrayList<>());

    public SseEmitter initSseEmitters() {

        SseEmitter sseEmitter = new SseEmitter();
        synchronized (this.sseEmitters) {
            this.sseEmitters.add(sseEmitter);
            sseEmitter.onCompletion(() -> {
                synchronized (this.sseEmitters) {
                    this.sseEmitters.remove(sseEmitter);
                }
            });
            sseEmitter.onTimeout(sseEmitter::complete);
        }
        return sseEmitter;
    }

    public void sendSseEventsToUI(OPCVariableChangedDTO notification) {
        synchronized (this.sseEmitters) {
            for (SseEmitter sseEmitter : this.sseEmitters) {
                try {
                    sseEmitter.send(notification, MediaType.APPLICATION_JSON);
                    sseEmitter.complete();
                } catch (Exception e) {
                    //???
                }
            }
        }
    }
}
