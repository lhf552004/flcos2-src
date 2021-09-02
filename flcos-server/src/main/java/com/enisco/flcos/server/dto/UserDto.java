package com.enisco.flcos.server.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserDto {
    private Long id;
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private List<RoleDto> roles;
    private boolean enabled;
    private boolean tokenExpired;
}
