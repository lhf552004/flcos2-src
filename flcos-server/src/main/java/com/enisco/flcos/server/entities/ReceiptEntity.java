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
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;

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

    @Column
    private Long unit;

    @Enumerated(EnumType.STRING)
    @Column(name = "package_type")
    private PackageType packageType;
}
