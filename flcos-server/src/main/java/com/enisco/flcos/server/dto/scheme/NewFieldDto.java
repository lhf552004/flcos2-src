package com.enisco.flcos.server.dto.scheme;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewFieldDto {
    private String fieldName;
    private String description;
    private SimpleSchemeDto schemeParent;
    private SimpleSchemeDto schemeType;
    private String unit;
}
