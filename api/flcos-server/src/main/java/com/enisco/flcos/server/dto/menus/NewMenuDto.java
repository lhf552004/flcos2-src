package com.enisco.flcos.server.dto.menus;

import com.enisco.flcos.server.dto.role.RoleDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewMenuDto {
    private String name;
    private String url;
    private RoleDto role;
    private Boolean external;
    private String externalUrl;
    private String iconName;
    private Integer index;
    private Boolean isRoot;
}
