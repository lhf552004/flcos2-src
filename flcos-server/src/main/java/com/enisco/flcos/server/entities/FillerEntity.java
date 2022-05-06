package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.bin.BinEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Getter
@Setter
@Entity(name="filler")
public class FillerEntity extends EquipmentEntity {
    @Column
    private String name;

    @Column
    private String category;

    @OneToOne
    @JoinColumn(name = "BIN_ID")
    private BinEntity bin;
}
