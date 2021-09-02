package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.NewRoleDto;
import com.enisco.flcos.server.dto.RoleDto;
import com.enisco.flcos.server.entities.RoleEntity;
import com.enisco.flcos.server.repository.postgresql.RoleRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/roles")
@RestController
public class RolesController {
    Logger logger = LoggerFactory.getLogger(RolesController.class);

    @Autowired
    private RoleRepository roleRepository;

    private ModelMapper modelMapper = new ModelMapper();

    @PostMapping
    public void createRole(@RequestBody NewRoleDto roleDto) {
        var roleEntity = modelMapper.map(roleDto, RoleEntity.class);
        roleRepository.save(roleEntity);
    }

    @GetMapping
    public List<RoleDto> getRoles() {
        return roleRepository.findAll().stream()
                .map(roleEntity -> modelMapper.map(roleEntity, RoleDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping(path = "{id}")
    public RoleDto getRole(@PathVariable Long id) {
        var result = roleRepository.findById(id);
        return result.map(roleEntity -> modelMapper.map(roleEntity, RoleDto.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public void updateRole(@PathVariable Long id, @RequestBody RoleDto userDto) {
        var result = roleRepository.findById(id);
        if (result.isPresent()) {
            var roleEntity = modelMapper.map(userDto, RoleEntity.class);
            roleEntity.setId(id);
            roleRepository.save(roleEntity);
        } else
            logger.error("Role {} not found", id);
    }

    @DeleteMapping(path = "{id}")
    public void deleteRole(@PathVariable Long id) {
        roleRepository.deleteById(id);
    }
}
