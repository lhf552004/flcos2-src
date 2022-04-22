package com.enisco.flcos.server.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class DTOBase {
    private Long id;

    private String modifiedBy;

    private String createdBy;

    private Date lastModifiedDate;
}
