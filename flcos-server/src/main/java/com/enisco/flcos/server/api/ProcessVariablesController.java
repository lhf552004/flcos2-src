package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.trending.NewProcessVariableDTO;
import com.enisco.flcos.server.dto.trending.ProcessVariableDTO;
import com.enisco.flcos.server.entities.trending.ProcessVariableDefEntity;
import com.enisco.flcos.server.repository.relational.ProcessVariableDefRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/process-variables")
@RestController
public class ProcessVariablesController {

    private ProcessVariableDefRepository processVariableDefRepository;
    @Autowired
    private ModelMapper modelMapper;

    public ProcessVariablesController(@Autowired ProcessVariableDefRepository processVariableDefRepository, @Autowired ModelMapper modelMapper) {
        this.processVariableDefRepository = processVariableDefRepository;
        this.modelMapper = modelMapper;
    }

    @PostMapping
    public Long create(@RequestBody NewProcessVariableDTO processVariableDTO) {
        var processVariableDefEntity = modelMapper.map(processVariableDTO, ProcessVariableDefEntity.class);
        processVariableDefRepository.save(processVariableDefEntity);
        return processVariableDefEntity.getId();
    }

    @GetMapping
    public List<ProcessVariableDTO> getAll() {
        return processVariableDefRepository.findAll().stream()
                .map(processVariableDefEntity -> modelMapper.map(processVariableDefEntity, ProcessVariableDTO.class))
                .collect(Collectors.toList());
    }

    @GetMapping(path = "{id}")
    public ProcessVariableDTO get(@PathVariable Long id) {
        var line = processVariableDefRepository.findById(id);
        return line.map(processVariableDefEntity -> modelMapper.map(processVariableDefEntity, ProcessVariableDTO.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody ProcessVariableDTO processVariableDTO) {
        var processVariableDefEntity = modelMapper.map(processVariableDTO, ProcessVariableDefEntity.class);
        processVariableDefRepository.save(processVariableDefEntity);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        processVariableDefRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
