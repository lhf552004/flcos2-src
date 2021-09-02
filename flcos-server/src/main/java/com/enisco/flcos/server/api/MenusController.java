package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.MenuDto;
import com.enisco.flcos.server.dto.NewMenuDto;
import com.enisco.flcos.server.entities.MenuEntity;
import com.enisco.flcos.server.repository.postgresql.MenuRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/menus")
@RestController
public class MenusController {
    Logger logger = LoggerFactory.getLogger(MenusController.class);

    @Autowired
    private MenuRepository menuRepository;

    private ModelMapper modelMapper = new ModelMapper();

    @PostMapping
    public void createMenu(@RequestBody NewMenuDto menuDto) {
        var menuEntity = modelMapper.map(menuDto, MenuEntity.class);
        menuRepository.save(menuEntity);
    }

    @GetMapping
    public List<MenuDto> getMenus() {
        return menuRepository.findAll().stream()
                .map(menuEntity -> modelMapper.map(menuEntity, MenuDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping(path = "{id}")
    public MenuDto getMenu(@PathVariable Long id) {
        var result = menuRepository.findById(id);
        return result.map(menuEntity -> modelMapper.map(menuEntity, MenuDto.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public void updateMenu(@PathVariable Long id, @RequestBody MenuDto menuDto) {
        var result = menuRepository.findById(id);
        if (result.isPresent()) {
            var menuEntity = modelMapper.map(menuDto, MenuEntity.class);
            menuEntity.setId(id);
            menuRepository.save(menuEntity);
        } else {
            logger.error("Menu {} not found", id);
        }
    }

    @DeleteMapping(path = "{id}")
    public void deleteRole(@PathVariable Long id) {
        menuRepository.deleteById(id);
    }
}
