package com.enisco.flcos.server.api;

import com.enisco.flcos.server.documents.Line;
import com.enisco.flcos.server.dto.LineDto;
import com.enisco.flcos.server.dto.menus.MenuDto;
import com.enisco.flcos.server.entities.LineEntity;
import com.enisco.flcos.server.entities.MenuEntity;
import com.enisco.flcos.server.repository.relational.LineRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RequestMapping("api/v1/lines")
@RestController
public class LinesController {

    private LineRepository lineRepository;
    @Autowired
    private ModelMapper modelMapper;

    public LinesController(@Autowired LineRepository lineRepository) {
        this.lineRepository = lineRepository;
    }

    @PostMapping
    public void createLine(@RequestBody LineDto lineDto){
        var line = modelMapper.map(lineDto, LineEntity.class);
        lineRepository.save(line);
    }

    @GetMapping
    public ResponseEntity<?> getLines() {
        return ResponseEntity.ok(lineRepository.findAll());
    }

    @GetMapping(path = "{id}")
    public LineDto getLine(@PathVariable Long id){
        var line = lineRepository.findById(id);
        return line.map(lineEntity -> modelMapper.map(lineEntity, LineDto.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public void updateLine(@PathVariable Long id, @RequestBody LineDto lineDto){
        var line = modelMapper.map(lineDto, LineEntity.class);
        lineRepository.save(line);
    }

    @DeleteMapping(path = "{id}")
    public void deleteLine(@PathVariable Long id){
        lineRepository.deleteById(id);
    }
}
