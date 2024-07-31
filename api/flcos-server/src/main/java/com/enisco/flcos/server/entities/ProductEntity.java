package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.enums.ProductType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name="product")
public class ProductEntity extends EntityBase {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;

    @Column
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "product_type")
    private ProductType productType;
}
