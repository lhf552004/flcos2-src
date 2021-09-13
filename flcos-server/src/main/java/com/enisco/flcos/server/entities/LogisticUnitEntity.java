package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.enums.UnitType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name="line")
public class LogisticUnitEntity extends EntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "batch_number")
    private String batchNumber;

    @Column
    private Long actualWeight;

    @ManyToOne
    private ProductEntity product;

    @ManyToOne
    private SupplierEntity supplier;

    @Column(name = "unit_type")
    private UnitType unitType;

    @Column
    private Long unit;

    @Column
    private String location;
}
