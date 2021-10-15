package com.enisco.flcos.server.api;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/stream2")
public class RestValueController {

    private final List<SseEmitter> sseEmitters = Collections.synchronizedList(new ArrayList<>());


    @GetMapping(value = "subscribe")
    public SseEmitter subscribe() {
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
}
