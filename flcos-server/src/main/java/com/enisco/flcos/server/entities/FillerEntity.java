package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.bin.BinEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "filler")
@DiscriminatorValue("Filler")
public class FillerEntity extends EquipmentEntity {
    @Column
    private String name;

    @Column
    private String category;

    @OneToOne
    @JoinColumn(name = "BIN_ID")
    private BinEntity bin;

    @Column(name = "PREVIOUS_DISCHARGR_ID")
    private Long previousDischargerId;
}
