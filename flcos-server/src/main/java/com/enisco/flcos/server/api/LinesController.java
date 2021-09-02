package com.enisco.flcos.server.api;

import com.enisco.flcos.server.documents.Line;
import com.enisco.flcos.server.repository.mongodb.LineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RequestMapping("api/v1/lines")
@RestController
public class LinesController {

    private LineRepository lineRepository;

    public LinesController(@Autowired LineRepository lineRepository) {
        this.lineRepository = lineRepository;
    }

    @PostMapping
    public void createLine(@RequestBody Line line){
        line.setId(UUID.randomUUID());
        lineRepository.insert(line);
    }

    @GetMapping
    public ResponseEntity<?> getLines() {
        return ResponseEntity.ok(lineRepository.findAll());
    }

    @GetMapping(path = "{id}")
    public Optional<Line> getLine(@PathVariable UUID id){
        return lineRepository.findById(id);
    }

    @PutMapping(path = "{id}")
    public void updateLine(@PathVariable UUID id, @RequestBody Line Line){
        lineRepository.save(Line);
    }

    @DeleteMapping(path = "{id}")
    public void deleteLine(@PathVariable UUID id){
        lineRepository.deleteById(id);
    }
}
