package com.enisco.flcos.server.entities.recipe;

import com.enisco.flcos.server.entities.EntityBase;
import com.enisco.flcos.server.entities.EquipmentEntity;
import com.enisco.flcos.server.entities.ProductEntity;
import com.enisco.flcos.server.entities.bin.BinEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@Entity(name = "ingredient")
public class IngredientEntity extends EntityBase {

    @ManyToOne(cascade = {
            CascadeType.REFRESH, CascadeType.DETACH}, fetch = FetchType.EAGER)
    private ProductEntity product;

    @Column(name = "percentage")
    private int percentage;

    @Column(name = "target_weight")
    private double targetWeight;

    @Column(name = "actual_weight")
    private double actualWeight;

    @ManyToOne(cascade = {
            CascadeType.REFRESH, CascadeType.DETACH}, fetch = FetchType.EAGER)
    private BinEntity sender;

    @ManyToOne(cascade = {
            CascadeType.REFRESH, CascadeType.DETACH}, fetch = FetchType.EAGER)
    private BinEntity receiver;

}
