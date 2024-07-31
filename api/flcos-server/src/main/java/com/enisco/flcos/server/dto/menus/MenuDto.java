package com.enisco.flcos.server.dto.menus;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.role.RoleDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MenuDto extends DTOBase {
    private String name;
    private String url;
    private RoleDto role;
    private Boolean external;
    private String externalUrl;
    private String iconName;
    private Integer index;
    private Boolean isRoot;
    private List<MenuDto> children;
}
