package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name="bin")
public class BinEntity extends EntityBase {
//    @Id
//    @GeneratedValue(strategy = GenerationType.SEQUENCE)
//    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    private ProductEntity product;

    @Column(name = "is_using")
    private boolean isUsing;

    @OneToOne(cascade = CascadeType.ALL)
    private GCObjectEntity sender;

    @OneToOne(cascade = CascadeType.ALL)
    private GCObjectEntity receiver;

}
