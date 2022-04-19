package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Getter
@Setter
@Entity(name = "gc_object")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class GCObjectEntity extends EntityBase {

    @Column(columnDefinition = "boolean default false")
    private boolean locked;

    @Column(name = "opc_variable_ident")
    private String opcVariableIdent;

    @Column
    private String location;

    @Column
    private String plc;
}
