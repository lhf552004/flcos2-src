package com.enisco.flcos.server.entities.trending;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.util.Date;

@Setter
@Getter
@Entity(name = "pro_value")
public class ProcessValueEntity extends EntityBase {
    @Column(name = "VARIABLE_NAME")
    private String variableName;

    @Column
    private Double value;

    @Column(name="TS_ARCHIVED")
    private Date tsArchived;
}
