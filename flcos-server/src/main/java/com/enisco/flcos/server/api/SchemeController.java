package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.scheme.NewFieldDto;
import com.enisco.flcos.server.entities.scheme.SchemeFieldEntity;
import com.enisco.flcos.server.repository.relational.SchemeFieldRepository;
import com.enisco.flcos.server.repository.relational.SchemeRepository;
import com.enisco.flcos.server.scheme.Field;
import com.enisco.flcos.server.scheme.Scheme;
import com.enisco.flcos.server.scheme.SchemeManager;

import com.enisco.flcos.server.util.RepositoryUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/schemes")
public class SchemeController extends ControllerBase {

    private final SchemeManager schemeManager;
    private final SchemeRepository schemeRepository;
    private final SchemeFieldRepository schemeFieldRepository;

    @Autowired
    public SchemeController(
            SchemeManager schemeManager,
            SchemeRepository schemeRepository,
            SchemeFieldRepository schemeFieldRepository
    ) {
        this.schemeManager = schemeManager;
        this.schemeRepository = schemeRepository;
        this.schemeFieldRepository = schemeFieldRepository;
    }

    @GetMapping(path = "by-name/{name}")
    public Scheme getSchemeByName(@PathVariable String name) {
        return schemeManager.getScheme(name);
    }

    @GetMapping(path = "{id}")
    public Scheme getScheme(@PathVariable Long id) {
        return schemeManager.getScheme(id);
    }

    @GetMapping
    public String[] getAllNames() {
        return schemeManager.getAllNames();
    }

    @PutMapping(path = "{id}/add-field")
    public ResponseEntity addField(@PathVariable Long id, NewFieldDto newField) {
        var schemeField = modelMapper.map(newField, SchemeFieldEntity.class);
        var schemeOptional = schemeRepository.findById(id);
        if (schemeOptional.isPresent()) {
            var scheme = schemeOptional.get();
            scheme.getFields().add(schemeField);
            RepositoryUtil.update(schemeRepository, scheme);
        } else {
            ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().build();
    }
}
