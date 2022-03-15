package com.enisco.flcos.server.api;


import com.enisco.flcos.server.dto.line.LineDto;
import com.enisco.flcos.server.dto.line.NewLineDto;
import com.enisco.flcos.server.entities.LineEntity;
import com.enisco.flcos.server.repository.relational.LineRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RequestMapping("api/v1/lines")
@RestController
public class LinesController {

    private LineRepository lineRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Value("${svg.location}")
    private String svgLocation;

    public LinesController(@Autowired LineRepository lineRepository) {
        this.lineRepository = lineRepository;
    }

    @PostMapping
    public void createLine(@RequestBody NewLineDto lineDto) {
        var line = modelMapper.map(lineDto, LineEntity.class);
        lineRepository.save(line);
    }

    @GetMapping
    public ResponseEntity<?> getLines() {
        return ResponseEntity.ok(lineRepository.findAll());
    }

    @GetMapping(path = "{id}")
    public LineDto getLine(@PathVariable Long id) {
        var line = lineRepository.findById(id);
        return line.map(lineEntity -> modelMapper.map(lineEntity, LineDto.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public void updateLine(@PathVariable Long id, @RequestBody LineDto lineDto) {
        var line = modelMapper.map(lineDto, LineEntity.class);
        lineRepository.save(line);
    }

    @PostMapping(path = "svg-upload/{id}")
    public ResponseEntity handleFileUpload(@PathVariable Long id, @RequestParam("multipartFile") MultipartFile multipartFile,
                                           RedirectAttributes redirectAttributes) throws IOException {
        var result = lineRepository.findById(id);
        if (result.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        var line = result.get();
        try {
            var folderPath = Paths.get(svgLocation);
            if(Files.notExists(folderPath)) {
                Files.createDirectory(folderPath);
            }
            var filePath = Paths.get(svgLocation, line.getName() + ".svg");
            multipartFile.transferTo(filePath);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok().build();
    }

    @DeleteMapping(path = "{id}")
    public void deleteLine(@PathVariable Long id) {
        lineRepository.deleteById(id);
    }
}
