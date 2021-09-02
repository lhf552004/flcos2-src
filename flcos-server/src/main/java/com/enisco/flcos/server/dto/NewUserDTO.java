package com.enisco.flcos.server.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class NewUserDTO {
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private List<RoleDto> roles;
}
