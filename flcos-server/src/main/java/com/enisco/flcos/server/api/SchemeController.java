package com.enisco.flcos.server.api;

import com.enisco.flcos.server.repository.relational.SchemeRepository;
import com.enisco.flcos.server.scheme.Scheme;
import com.enisco.flcos.server.scheme.SchemeManager;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/schemes")
public class SchemeController extends ControllerBase {

    private SchemeManager schemeManager;

    public SchemeController(@Autowired SchemeManager schemeManager) {
        this.schemeManager = schemeManager;
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
}
