package com.enisco.flcos.server.entities.trending;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Setter
@Getter
@Entity(name = "pro_var_def")
public class ProcessVariableDefEntity extends EntityBase {
    @Column(name = "VARIABLE_NAME")
    private String variableName;

    @Column(name = "HIGH_HIGH")
    private Float highHigh;

    @Column
    private Float high;

    @Column
    private Float low;

    @Column(name = "LOW_LOW")
    private Float lowLow;

    @Column
    private String plc;

    @Column
    private String device;

    @Enumerated(EnumType.STRING)
    @Column
    private VariableType type;
}
