package com.enisco.flcos.server.dto.menus;

import com.enisco.flcos.server.dto.RoleDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MenuDto extends NewMenuDto {
    private Long id;
    private List<MenuDto> children;
}
