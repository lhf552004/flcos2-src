package com.enisco.flcos.server.api;

import com.enisco.flcos.server.beans.GcObjectManagement;
import com.enisco.flcos.server.dto.section.NewSectionDto;
import com.enisco.flcos.server.dto.section.SectionDto;
import com.enisco.flcos.server.entities.SectionEntity;
import com.enisco.flcos.server.repository.relational.SectionRepository;
import com.enisco.flcos.server.util.RepositoryUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/sections")
@RestController
public class SectionController extends GenericControllerBase<SectionEntity, SectionDto, NewSectionDto> {

    private final SectionRepository sectionRepository;

    private final GcObjectManagement gcObjectManagement;

    @Autowired
    public SectionController(SectionRepository sectionRepository,
                             GcObjectManagement gcObjectManagement
    ) {
        this.sectionRepository = sectionRepository;
        this.gcObjectManagement = gcObjectManagement;
    }

    @Override
    JpaRepository<SectionEntity, Long> getRepository() {
        return sectionRepository;
    }

    @Override
    @PostMapping
    public ResponseEntity<Long> create(@RequestBody NewSectionDto newSectionDto) {
        var sectionEntity = modelMapper.map(newSectionDto, SectionEntity.class);
        RepositoryUtil.create(getRepository(), sectionEntity);
        gcObjectManagement.updateSection(sectionEntity);
        return ResponseEntity.ok(sectionEntity.getId());
    }

    @Override
    @PutMapping(path = "{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody SectionDto sectionDto) {
        var sectionEntity = modelMapper.map(sectionDto, SectionEntity.class);
        RepositoryUtil.update(getRepository(), sectionEntity);
        gcObjectManagement.updateSection(sectionEntity);
        return ResponseEntity.ok().build();
    }
    
}
