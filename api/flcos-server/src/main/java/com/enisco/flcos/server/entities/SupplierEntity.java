package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name="supplier")
public class SupplierEntity extends EntityBase {

    @Column
    private String name;

    @Column
    private String address;

    @Column
    private String email;

    @Column
    private String phone;
}
