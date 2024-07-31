package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;

@Setter
@Getter
@Entity(name="warehouse")
public class WarehouseEntity extends EntityBase{
    @Column
    private String name;
}
