package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.bin.BinEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "discharger")
@DiscriminatorValue("Discharger")
public class DischargerEntity extends EquipmentEntity {
    @Column
    private String name;

    @Column
    private String category;

    @Column
    private int priority;

    @OneToOne
    @JoinColumn(name = "bin_id")
    private BinEntity bin;

    @Column(name = "NEXT_FILLER_ID")
    private Long nextFillerId;

}
