package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.enums.EquipmentType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity(name = "equipment")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class EquipmentEntity extends EntityBase {

    @Column(columnDefinition = "boolean default false")
    private boolean locked;

    @Column(name = "opc_variable_ident")
    private String opcVariableIdent;

    @Column
    private String location;

    @Column
    private String plc;

    @Column(name = "Equipment_Type")
    private EquipmentType equipmentType;
}
