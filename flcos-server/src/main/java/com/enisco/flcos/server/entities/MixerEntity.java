package com.enisco.flcos.server.entities;

import jdk.jfr.Timespan;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "mixer")
public class MixerEntity extends ProcessStationEntity {
    @Column
    private String mixerType;
    @Column
    private double capacityMin;
    @Column
    private double capacityMax;
    @Column
    private double weightMin;
    @Column
    private double weightMax;
    @Column
    private int mixTimePre;
    @Column
    private int mixTime;
    @Column
    private int mixTimePost;
    @Column
    private int emptyDelay;

}
