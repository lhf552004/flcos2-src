package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name="process_station")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class ProcessStationEntity extends EquipmentEntity {

    private String name;

    private int index;

    @OneToMany
    private List<DischargerEntity> dischargers;

    @OneToMany
    private List<FillerEntity> fillers;
}
