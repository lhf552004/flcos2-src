package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Setter
@Getter
@Entity(name="registration_scale")
public class RegistrationScaleEntity extends ProcessStationEntity {
    private double currentFlowRate;
    private double gcsScalingFactorFlowRate;
    private double totalWeight;
    private String state;

}
