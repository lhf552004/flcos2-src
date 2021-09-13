package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name="ingredient")
public class IngredientEntity extends EntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    private ProductEntity product;

    @Column(name = "percentage")
    private int percentage;

    @Column(name = "target_weight")
    private int targetWeight;

    @Column(name = "actual_weight")
    private int actualWeight;
}
