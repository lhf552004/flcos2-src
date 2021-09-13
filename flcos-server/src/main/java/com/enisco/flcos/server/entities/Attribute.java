package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
public abstract class Attribute extends EntityBase {

    @Column(name = "variable_name")
    private String variableName;

    @Column(name = "variable_value")
    private String variableValue;
}
