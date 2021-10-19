package com.enisco.flcos.server.dto.menus;

import com.enisco.flcos.server.dto.RoleDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MenuDto {
    private Long id;
    private String name;
    private String url;
    private RoleDto role;
    private List<MenuDto> children;
    private MenuDto parent;
    private Boolean external;
    private String externalUrl;
    private String iconName;
    private Integer index;
}
