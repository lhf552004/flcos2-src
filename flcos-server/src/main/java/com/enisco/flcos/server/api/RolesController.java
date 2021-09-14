package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.*;
import com.enisco.flcos.server.entities.RoleEntity;
import com.enisco.flcos.server.repository.postgresql.MenuRepository;
import com.enisco.flcos.server.repository.postgresql.RoleRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/roles")
@RestController
public class RolesController {
    Logger logger = LoggerFactory.getLogger(RolesController.class);
    private final String NOT_FOUND = "Role {} not found";
    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private MenuRepository menuRepository;

    private ModelMapper modelMapper = new ModelMapper();

    @PostMapping
    public Long createRole(@RequestBody NewRoleDto roleDto) {
        var roleEntity = modelMapper.map(roleDto, RoleEntity.class);
        roleRepository.save(roleEntity);
        return roleEntity.getId();
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

    @PutMapping(path = "{id}/rename")
    public ResponseEntity rename(@PathVariable Long id, @RequestBody RenameDTO renameDTO) {
        var result = roleRepository.findById(id);
        if (result.isPresent()) {
            var roleEntity = result.get();
            roleEntity.setName(renameDTO.getName());
            roleRepository.save(roleEntity);
            return ResponseEntity.ok().build();
        } else {
            logger.error(Consts.NOT_FOUND, "Role", id);
            return ResponseEntity.notFound().build();
        }
    }

//    @PostMapping(path = "{id}/add-menus")
//    public ResponseEntity addMenus(@PathVariable Long id, @RequestBody AddMenusDTO roleDto) {
//        var result = roleRepository.findById(id);
//        if (result.isPresent()) {
//            var existed = result.get();
//            var menus = menuRepository.findByIds(roleDto.getMenus().stream().map(MenuDto::getId).collect(Collectors.toList()));
//            existed.getMenus().addAll(menus);
//            roleRepository.save(existed);
//            return ResponseEntity.ok().build();
//        } else {
//            logger.error(Consts.NOT_FOUND, "Role", id);
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//    @PostMapping(path = "{id}/remove-menus")
//    public ResponseEntity removeMenus(@PathVariable Long id, @RequestBody AddMenusDTO roleDto) {
//        var result = roleRepository.findById(id);
//        if (result.isPresent()) {
//            var existed = result.get();
//            roleDto.getMenus().forEach(menuDto -> existed.getMenus().removeIf(menuEntity -> menuEntity.getId() == menuDto.getId()));
//            roleRepository.save(existed);
//            return ResponseEntity.ok().build();
//        } else {
//            logger.error(Consts.NOT_FOUND, "Role", id);
//            return ResponseEntity.notFound().build();
//        }
//    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity deleteRole(@PathVariable Long id) {
        var result = roleRepository.findById(id);
        if (result.isPresent()) {
            roleRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            logger.error(Consts.NOT_FOUND, "Role", id);
            return ResponseEntity.notFound().build();
        }
    }
}
