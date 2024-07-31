package com.enisco.flcos.server.dto.alarm;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import java.util.Date;


@Getter
@Setter
public class AlarmDto {
    private Long id;
    private String message;
    private boolean active;
    private String modifiedBy;
    private String createdBy;
    private Date lastModifiedDate;
}
