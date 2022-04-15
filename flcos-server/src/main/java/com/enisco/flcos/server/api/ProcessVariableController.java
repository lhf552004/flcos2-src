package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.RoleDto;
import com.enisco.flcos.server.dto.menus.MenuDto;
import com.enisco.flcos.server.dto.menus.NewMenuDto;
import com.enisco.flcos.server.dto.trending.NewProcessVariableDTO;
import com.enisco.flcos.server.dto.trending.ProcessVariableDTO;
import com.enisco.flcos.server.entities.MenuEntity;
import com.enisco.flcos.server.entities.RoleEntity;
import com.enisco.flcos.server.entities.trending.ProcessVariableDefEntity;
import com.enisco.flcos.server.mapper.MenuMapperImpl;
import com.enisco.flcos.server.repository.relational.MenuRepository;
import com.enisco.flcos.server.repository.relational.ProcessVariableDefRepository;
import com.enisco.flcos.server.repository.relational.UserRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/process-variable")
@RestController
public class ProcessVariableController {
    Logger logger = LoggerFactory.getLogger(ProcessVariableController.class);

    @Autowired
    private ProcessVariableDefRepository processVariableDefRepository;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping
    public Long createProcessVariable(@RequestBody NewProcessVariableDTO newProcessVariableDTO) {
        var processVariableDefEntity = modelMapper.map(newProcessVariableDTO, ProcessVariableDefEntity.class);
        processVariableDefRepository.save(processVariableDefEntity);
        return processVariableDefEntity.getId();
    }

    @GetMapping
    public List<ProcessVariableDTO> getMenus() {
        return processVariableDefRepository.findAll().stream()
                .map(processVariableDefEntity -> modelMapper.map(processVariableDefEntity, ProcessVariableDTO.class))
                .collect(Collectors.toList());
    }

    @GetMapping(path = "{id}")
    public ProcessVariableDTO getMenu(@PathVariable Long id) {
        var result = processVariableDefRepository.findById(id);
        return result.map(menuEntity -> modelMapper.map(menuEntity, ProcessVariableDTO.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public ResponseEntity updateMenu(@PathVariable Long id, @RequestBody ProcessVariableDTO processVariableDTO) {
        var result = processVariableDefRepository.findById(id);
        if (result.isPresent()) {
            var processVariableDefEntity = modelMapper.map(processVariableDTO, ProcessVariableDefEntity.class);
            processVariableDefEntity.setId(id);
            processVariableDefRepository.save(processVariableDefEntity);
            return ResponseEntity.ok().build();
        } else {
            logger.error("Process variable {} not found", id);
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "{id}")
    public void deleteRole(@PathVariable Long id) {
        processVariableDefRepository.deleteById(id);
    }
}
