package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.enums.PackageType;
import com.enisco.flcos.server.entities.enums.UnitType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Setter
@Getter
@Entity(name = "logistic_unit")
public class LogisticUnitEntity extends EntityBase {
    @Column
    private String batchNumber;

    @Column
    private String supplier;

    @Column
    private String product;

    @Enumerated(EnumType.STRING)
    @Column(name = "unit_type")
    private UnitType unitType;

    @Enumerated(EnumType.STRING)
    @Column(name = "package_type")
    private PackageType packageType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "warehouse_id")
    private WarehouseEntity warehouse;

    @Column
    private double targetWeight;

    @Column
    private double actualWeight;

    @Column(columnDefinition = "boolean default false")
    private boolean opened;
}
