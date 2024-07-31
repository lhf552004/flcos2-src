package com.enisco.flcos.server.dto.user;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.role.RoleDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserDto extends DTOBase {
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private List<RoleDto> roles;
    private boolean enabled;
    private boolean tokenExpired;
}
