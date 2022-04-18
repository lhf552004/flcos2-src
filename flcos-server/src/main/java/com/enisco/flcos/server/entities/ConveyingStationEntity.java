package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Getter
@Setter
@Entity(name="conveying_station")
public class ConveyingStationEntity extends ProcessStationEntity {
}
