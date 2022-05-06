package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.bin.BinEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@Entity(name="ingredient")
public class IngredientEntity extends EntityBase {

    @ManyToOne(cascade = CascadeType.ALL)
    private ProductEntity product;

    @Column(name = "percentage")
    private int percentage;

    @Column(name = "target_weight")
    private double targetWeight;

    @Column(name = "actual_weight")
    private double actualWeight;

    @ManyToOne
    private BinEntity sender;

    @ManyToOne
    private BinEntity receiver;

}
