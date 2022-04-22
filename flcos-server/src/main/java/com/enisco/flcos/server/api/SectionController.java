package com.enisco.flcos.server.api;

import com.enisco.flcos.server.beans.GcObjectManagement;
import com.enisco.flcos.server.dto.section.NewSectionDto;
import com.enisco.flcos.server.dto.section.SectionDto;
import com.enisco.flcos.server.entities.SectionEntity;
import com.enisco.flcos.server.repository.relational.SectionRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/sections")
@RestController
public class SectionController {

    private final SectionRepository sectionRepository;

    private final ModelMapper modelMapper;

    private final GcObjectManagement gcObjectManagement;

    @Autowired
    public SectionController(SectionRepository sectionRepository,
                             ModelMapper modelMapper,
                             GcObjectManagement gcObjectManagement
    ) {
        this.sectionRepository = sectionRepository;
        this.modelMapper = modelMapper;
        this.gcObjectManagement = gcObjectManagement;
    }

    @PostMapping
    public ResponseEntity<Long> create(@RequestBody NewSectionDto newSectionDto) {
        var sectionEntity = modelMapper.map(newSectionDto, SectionEntity.class);
        sectionRepository.save(sectionEntity);
        gcObjectManagement.updateSection(sectionEntity);
        return ResponseEntity.ok(sectionEntity.getId());
    }

    @GetMapping
    public List<SectionDto> getSections() {
        return sectionRepository.findAll().stream()
                .map(sectionEntity -> modelMapper.map(sectionEntity, SectionDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping(path = "{id}")
    public SectionDto get(@PathVariable Long id) {
        var result = sectionRepository.findById(id);
        return result.map(sectionEntity -> modelMapper.map(sectionEntity, SectionDto.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody SectionDto sectionDto) {
        var sectionEntity = modelMapper.map(sectionDto, SectionEntity.class);
        sectionRepository.save(sectionEntity);
        gcObjectManagement.updateSection(sectionEntity);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        sectionRepository.deleteById(id);
        gcObjectManagement.deleteSection(id);
        return ResponseEntity.ok().build();
    }
}
