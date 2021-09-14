package com.enisco.flcos.server.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MenuDto {
    private Long id;
    private String name;
    private String url;
    private RoleDto role;
}
