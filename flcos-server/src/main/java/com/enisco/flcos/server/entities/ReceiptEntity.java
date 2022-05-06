package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.enums.PackageType;
import com.enisco.flcos.server.entities.enums.UnitType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name="receipt")
public class ReceiptEntity extends EntityBase {

    @Column(name = "batch_number")
    private String batchNumber;

    @ManyToOne
    private SupplierEntity supplier;

    @ManyToOne
    private ProductEntity product;

    @Column
    private Long quantity;

    @Enumerated(EnumType.STRING)
    @Column(name = "unit_type")
    private UnitType unitType;

    @Column(name = "per_weight")
    private double perWeight;

    @Enumerated(EnumType.STRING)
    @Column(name = "package_type")
    private PackageType packageType;
}
