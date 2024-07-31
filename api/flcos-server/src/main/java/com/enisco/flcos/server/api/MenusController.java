package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.menus.MenuDto;
import com.enisco.flcos.server.dto.menus.NewMenuDto;
import com.enisco.flcos.server.dto.role.RoleDto;
import com.enisco.flcos.server.entities.MenuEntity;
import com.enisco.flcos.server.entities.RoleEntity;
import com.enisco.flcos.server.repository.relational.MenuRepository;
import com.enisco.flcos.server.repository.relational.UserRepository;

import com.enisco.flcos.server.util.RepositoryUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
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

public class MenusController extends GenericControllerBase<MenuEntity, MenuDto, MenuDto, NewMenuDto> {
    Logger logger = LoggerFactory.getLogger(MenusController.class);

    private final MenuRepository menuRepository;

    private final UserRepository userRepository;

    @Autowired
    public MenusController(MenuRepository menuRepository,
                           UserRepository userRepository
    ) {
        this.menuRepository = menuRepository;
        this.userRepository = userRepository;
    }

    @Override
    @GetMapping
    public List<MenuDto> getAll(@RequestParam(required = false, defaultValue = "0") int page, @RequestParam(required = false, defaultValue = "30") int size, @RequestParam(required = false, defaultValue = "") String direct, @RequestParam(required = false, defaultValue = "id") String sortProperty) {
        return menuRepository.findAll().stream()
                .filter(MenuEntity::getIsRoot)
                .map(menuEntity -> modelMapper.map(menuEntity, MenuDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping(path = "by-role")
    public List<MenuDto> getMenusByRoles() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            var roles = userRepository.findByUserName(currentUserName).get().getRoles();
            return menuRepository.findAll().stream()
                    .filter(m -> roles.contains(m.getRole()) && m.getIsRoot())
                    .map(menuEntity -> modelMapper.map(menuEntity, MenuDto.class))
                    .collect(Collectors.toList());
        }
        return new ArrayList<>();
    }

    @Override
    JpaRepository<MenuEntity, Long> getRepository() {
        return menuRepository;
    }

    @PostMapping(path = "{id}/assign-role")
    public ResponseEntity assignRole(@PathVariable Long id, @RequestBody RoleDto roleDto) {
        var result = menuRepository.findById(id);
        if (result.isPresent()) {
            var menuEntity = result.get();
            var roleEntity = modelMapper.map(roleDto, RoleEntity.class);
            menuEntity.setRole(roleEntity);
            RepositoryUtil.update(getRepository(), menuEntity);
            return ResponseEntity.ok().build();
        } else {
            logger.error("Menu {} not found", id);
            return ResponseEntity.notFound().build();
        }
    }

}
