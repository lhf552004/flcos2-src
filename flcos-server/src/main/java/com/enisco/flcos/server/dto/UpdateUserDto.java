package com.enisco.flcos.server.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateUserDto extends UserDto {
    private String password;
}
