package com.enisco.flcos.server.dto.job;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MessageDto {
    private List<String> errors;
    private List<String> infos;

}
