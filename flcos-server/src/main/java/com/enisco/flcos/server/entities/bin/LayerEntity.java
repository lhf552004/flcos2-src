package com.enisco.flcos.server.entities.bin;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name="layer")
public class LayerEntity extends EntityBase {

    @ManyToOne
    @JoinColumn(name = "bin_id")
    private BinEntity bin;

    @Column(name = "batch_number")
    private String batchNumber;

    @Column(name = "actual_weight")
    private double actualWeight;

}
