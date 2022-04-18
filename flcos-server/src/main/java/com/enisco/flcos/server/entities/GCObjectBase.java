package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.MappedSuperclass;

@Getter
@Setter
@MappedSuperclass
public class GCObjectBase extends EntityBase {

    @Column(name = "opc_variable_ident")
    private String opcVariableIdent;
    private String location;

}
