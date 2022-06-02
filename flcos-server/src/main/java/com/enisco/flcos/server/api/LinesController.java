package com.enisco.flcos.server.api;


import com.enisco.flcos.server.beans.GcObjectManagement;
import com.enisco.flcos.server.beans.LineManagement;
import com.enisco.flcos.server.dto.line.LineDto;
import com.enisco.flcos.server.dto.line.LineListDto;
import com.enisco.flcos.server.dto.line.NewLineDto;
import com.enisco.flcos.server.entities.LineEntity;
import com.enisco.flcos.server.repository.relational.LineRepository;

import com.enisco.flcos.server.util.RepositoryUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@RequestMapping("api/v1/lines")
@RestController
public class LinesController extends GenericControllerBase<LineEntity, LineDto, LineListDto, NewLineDto> {

    private final LineRepository lineRepository;
    private final LineManagement lineManagement;

    private final ModelMapper modelMapper;

    @Value("${svg.location}")
    private String svgLocation;

    private final GcObjectManagement gcObjectManagement;

    @Autowired
    public LinesController(LineRepository lineRepository,
                           LineManagement lineManagement,
                           ModelMapper modelMapper,
                           GcObjectManagement gcObjectManagement
    ) {
        this.lineRepository = lineRepository;
        this.lineManagement = lineManagement;
        this.modelMapper = modelMapper;
        this.gcObjectManagement = gcObjectManagement;
    }

    @Override
    JpaRepository<LineEntity, Long> getRepository() {
        return lineRepository;
    }

    @Override
    @PostMapping
    public ResponseEntity<Long> create(@RequestBody NewLineDto lineDto) {
        var line = modelMapper.map(lineDto, LineEntity.class);
        RepositoryUtil.create(getRepository(), line);
        gcObjectManagement.updateLine(line);
        return ResponseEntity.ok(line.getId());
    }

    @Override
    @PutMapping(path = "{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody LineDto lineDto) {
        var line = modelMapper.map(lineDto, LineEntity.class);
        RepositoryUtil.update(getRepository(), line);
        gcObjectManagement.updateLine(line);
        return ResponseEntity.ok().build();
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
            if (Files.notExists(folderPath)) {
                Files.createDirectory(folderPath);
            }
            var filePath = Paths.get(svgLocation, line.getName() + ".svg");
            multipartFile.transferTo(filePath);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok().build();
    }

    @Override
    @DeleteMapping(path = "{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        lineRepository.deleteById(id);
        gcObjectManagement.deleteLine(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping(path = "reset/{id}")
    public ResponseEntity reset(@PathVariable Long id) {
        var result = lineRepository.findById(id);
        if(result.isPresent()) {

        }
        return ResponseEntity.ok().build();
    }
}
