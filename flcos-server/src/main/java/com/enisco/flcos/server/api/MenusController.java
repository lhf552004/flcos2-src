package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.menus.MenuDto;
import com.enisco.flcos.server.dto.menus.NewMenuDto;
import com.enisco.flcos.server.dto.RoleDto;
import com.enisco.flcos.server.entities.MenuEntity;
import com.enisco.flcos.server.entities.RoleEntity;
import com.enisco.flcos.server.mapper.MenuMapperImpl;
import com.enisco.flcos.server.repository.postgresql.MenuRepository;
import com.enisco.flcos.server.repository.postgresql.UserRepository;
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

@RequestMapping("api/v1/menus")
@RestController
public class MenusController {
    Logger logger = LoggerFactory.getLogger(MenusController.class);

    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private MenuMapperImpl menuMapper;

    @PostMapping
    public Long createMenu(@RequestBody NewMenuDto menuDto) {
        var menuEntity = modelMapper.map(menuDto, MenuEntity.class);
        menuRepository.save(menuEntity);
        return menuEntity.getId();
    }

    @GetMapping
    public List<MenuDto> getMenus() {
        return menuRepository.findAll().stream()
                .map(menuEntity -> menuMapper.menuToDto(menuEntity))
                .collect(Collectors.toList());
    }

    @GetMapping(path = "by-role")
    public List<MenuDto> getMenusByRoles() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            var roles = userRepository.findByUserName(currentUserName).get().getRoles();
            return menuRepository.findAll().stream()
                    .filter(m -> roles.contains(m.getRole()) && m.getParent() == null)
                    .map(menuEntity -> menuMapper.menuToDto(menuEntity))
                    .collect(Collectors.toList());
        }
        return new ArrayList<>();
    }

    @GetMapping(path = "{id}")
    public MenuDto getMenu(@PathVariable Long id) {
        var result = menuRepository.findById(id);
        return result.map(menuEntity -> modelMapper.map(menuEntity, MenuDto.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public ResponseEntity updateMenu(@PathVariable Long id, @RequestBody MenuDto menuDto) {
        var result = menuRepository.findById(id);
        if (result.isPresent()) {
            var menuEntity = modelMapper.map(menuDto, MenuEntity.class);
            menuEntity.setId(id);
            menuRepository.save(menuEntity);
            return ResponseEntity.ok().build();
        } else {
            logger.error("Menu {} not found", id);
            return ResponseEntity.notFound().build();
        }
    }

//    @PutMapping(path = "{id}/add-children")
//    public ResponseEntity addChildren(@PathVariable Long id, @RequestBody List<NewMenuDto> childrenDto) {
//        var result = menuRepository.findById(id);
//        if (result.isPresent()) {
//            var menuEntity = result.get();
//            List<MenuEntity> childrenEntity = new ArrayList<>();
//            childrenDto.forEach(newMenuDto -> {
//                var childEntity = modelMapper.map(newMenuDto, MenuEntity.class);
//                menuRepository.save(childEntity);
//                childrenEntity.add(childEntity);
//            });
//            menuEntity.getChildren().addAll(childrenEntity);
//            menuRepository.save(menuEntity);
//            return ResponseEntity.ok().build();
//        } else {
//            logger.error("Menu {} not found", id);
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//    @PutMapping(path = "{id}/remove-children")
//    public ResponseEntity removeChildren(@PathVariable Long id, @RequestBody List<Long> childrenIdsToRemove) {
//        var result = menuRepository.findById(id);
//        if (result.isPresent()) {
//            var menuEntity = result.get();
//            var childrenToRemove = new ArrayList<MenuEntity>();
//            menuEntity.getChildren().stream()
//                    .filter(childrenMenu -> childrenIdsToRemove.contains(childrenMenu.getId()))
//                    .forEach(childMenuItem -> {
//                        childrenToRemove.add(childMenuItem);
//                        menuRepository.delete(childMenuItem);});
//            menuRepository.save(menuEntity);
//            return ResponseEntity.ok().build();
//        } else {
//            logger.error("Menu {} not found", id);
//            return ResponseEntity.notFound().build();
//        }
//    }

    @PostMapping(path = "{id}/assign-role")
    public ResponseEntity assignRole(@PathVariable Long id, @RequestBody RoleDto roleDto) {
        var result = menuRepository.findById(id);
        if (result.isPresent()) {
            var menuEntity = result.get();
            var roleEntity = modelMapper.map(roleDto, RoleEntity.class);
            menuEntity.setRole(roleEntity);
            menuRepository.save(menuEntity);
            return ResponseEntity.ok().build();
        } else {
            logger.error("Menu {} not found", id);
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "{id}")
    public void deleteRole(@PathVariable Long id) {
        menuRepository.deleteById(id);
    }
}
