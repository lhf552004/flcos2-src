package com.enisco.flcos.server.dto.opcs;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QueryVariablesDto {
    private List<String> variables;
}
