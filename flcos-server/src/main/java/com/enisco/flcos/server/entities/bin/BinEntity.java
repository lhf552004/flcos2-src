package com.enisco.flcos.server.entities.bin;

import com.enisco.flcos.server.entities.*;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name="bin")
public class BinEntity extends EquipmentEntity {

    @Column
    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    private ProductEntity product;

    @Column(name = "is_using")
    private boolean isUsing;

    @OneToOne(cascade = CascadeType.ALL)
    private DischargerEntity discharger;

    @OneToOne(cascade = CascadeType.ALL)
    private FillerEntity filler;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "varchar(255) default 'Storage'")
    private BinType type;

    @Column(name = "line_id")
    private Long lineId;

}
