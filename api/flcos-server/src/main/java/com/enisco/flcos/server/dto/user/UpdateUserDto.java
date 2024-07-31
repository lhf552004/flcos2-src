package com.enisco.flcos.server.dto.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateUserDto extends UserDto {
    private String password;
}
