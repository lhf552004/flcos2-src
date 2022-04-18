package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Setter
@Getter
@Entity(name="mixer")
public class MixerEntity extends ProcessStationEntity {
}
