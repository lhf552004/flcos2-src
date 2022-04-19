package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;

@Setter
@Getter
@Entity(name = "scale")
public class ScaleEntity extends ProcessStationEntity {
    private String category;
    private double unit;

    /**
     * Maximum number of components for this scale.
     */
    @Column(name = "component_no_max_cfg")
    private int componentNoMaxCfg;
    @Column
    private double capacity;

    /**
     * The minimal amount per component for this scale.
     */
    @Column(name = "dosing_amount_min")
    private double dosingAmountMin;

    /**
     * The maximum amount per component for this scale.
     */
    @Column(name = "dosing_amount_max")
    private double dosingAmountMax;

    /**
     * The maximum amount per component for this scale.
     */
    @Column(name = "weight_max")
    private double weightMax;

    /**
     *  The ingredient weight target.
     */
    @Column(name = "Ingredient_Weight_Target")
    private double ingredientWeightTarget;

    /**
     *  The ingredient weight actual.
     */
    @Column(name = "Ingredient_Weight_Actual")
    private double ingredientWeightActual;

    /**
     *  Ingredient counter actual value.
     */
    @Column(name = "ingredient_Number_Current")
    private int ingredientNumberCurrent;


}
