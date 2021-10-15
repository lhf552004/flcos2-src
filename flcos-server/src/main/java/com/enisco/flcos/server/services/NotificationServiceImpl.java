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
public class NotificationServiceImpl implements NotificationService {

    public static final List<SseEmitter> emitters = Collections.synchronizedList(new ArrayList<>());

    @Override
    public SseEmitter initSseEmitters() {

        SseEmitter emitter = new SseEmitter();
        emitters.add(emitter);
        emitter.onCompletion(() -> emitters.remove(emitter));

        return emitter;
    }

    @Override
    public void sendSseEventsToUI(OPCVariableChangedDTO notification) {
        List<SseEmitter> sseEmitterListToRemove = new ArrayList<>();
        this.emitters.forEach((SseEmitter emitter) -> {
            try {
                emitter.send(notification, MediaType.APPLICATION_JSON);
            } catch (IOException e) {
                emitter.complete();
                sseEmitterListToRemove.add(emitter);
                e.printStackTrace();
            }
        });
        this.emitters.removeAll(sseEmitterListToRemove);
    }
}
