package com.enisco.flcos.server.mapper;

import com.enisco.flcos.server.dto.role.RoleDto;
import com.enisco.flcos.server.dto.menus.MenuDto;
import com.enisco.flcos.server.entities.MenuEntity;
import org.springframework.stereotype.Component;

import javax.annotation.processing.Generated;
import java.util.stream.Collectors;

@Generated(
        value = "org.mapstruct.ap.MappingProcessor",
        date = "2021-10-19T19:21:44+0100",
        comments = "version: 1.4.2.Final, compiler: javac, environment: Java 23.0.2 (Oracle Corporation)"
)
@Component
public class MenuMapperImpl implements MenuMapper{
    @Override
    public MenuDto menuToDto(MenuEntity menu) {
        if(menu == null)
            return null;
        var menuDto = new MenuDto();
        menuDto.setId(menu.getId());
        menuDto.setName(menu.getName());
        menuDto.setUrl(menu.getUrl());
        menuDto.setExternal(menu.getExternal());
        menuDto.setExternalUrl(menu.getExternalUrl());
        menuDto.setIndex(menu.getIndex());
        menuDto.setIconName(menu.getIconName());

        if(menu.getRole() != null) {
            var roleDto = new RoleDto();
            roleDto.setId(menu.getRole().getId());
            roleDto.setName(menu.getRole().getName());
            menuDto.setRole(roleDto);
        }

//        if(menu.getParent() != null) {
//            var parentDto = new MenuDto();
//            parentDto.setId(menu.getParent().getId());
//            parentDto.setName(menu.getParent().getName());
//            parentDto.setExternal(menu.getParent().getExternal());
//            parentDto.setExternalUrl(menu.getParent().getExternalUrl());
//            parentDto.setIndex(menu.getParent().getIndex());
//            parentDto.setIconName(menu.getParent().getIconName());
//            menuDto.setParent(parentDto);
//        }

        menuDto.setChildren(menu.getChildren().stream().map(this::menuToDto).collect(Collectors.toList()));
        return menuDto;
    }

//    @Override
//    public MenuEntity dtoToMenu(MenuDto menuDTO) {
//        return null;
//    }

}
