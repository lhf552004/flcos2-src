package com.enisco.flcos.server.dto.scheme;

import com.enisco.flcos.server.dto.DTOBase;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FieldDto extends DTOBase {
    private String fieldName;
    private String description;
    private SimpleSchemeDto schemeParent;
    private SimpleSchemeDto schemeType;
    private String unit;
}
