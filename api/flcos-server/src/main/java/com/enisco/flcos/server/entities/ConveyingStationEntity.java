package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.bin.BinEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Getter
@Setter
@Entity(name="conveying_station")
public class ConveyingStationEntity extends ProcessStationEntity {
    private String category;

    @OneToOne
    @JoinColumn(name = "bin_id")
    private BinEntity curBin;
}
