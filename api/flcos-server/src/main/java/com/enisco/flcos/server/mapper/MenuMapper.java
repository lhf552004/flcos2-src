package com.enisco.flcos.server.mapper;

import com.enisco.flcos.server.dto.menus.MenuDto;
import com.enisco.flcos.server.entities.MenuEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface MenuMapper {
    MenuMapper INSTANCE = Mappers.getMapper(MenuMapper.class);

    @Mappings({
            @Mapping(target = "parent.children", ignore = true)
    })
    MenuDto menuToDto(MenuEntity child);

//    @Mappings({
//            @Mapping(target = "parent.children", ignore = true)
//    })
//    MenuEntity dtoToMenu(MenuDto childDTO);
}
