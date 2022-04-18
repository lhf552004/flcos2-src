package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.enums.EquipmentType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name="equipment")
public class EquipmentEntity extends EntityBase {

    @Enumerated(EnumType.STRING)
    @Column(name = "equipment_type")
    private EquipmentType equipmentType;
}
