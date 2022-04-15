package com.enisco.flcos.server.entities.alarm;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@Getter
@Setter
public class AlarmEntity extends EntityBase {
    @Column
    private String message;
    @Column(name = "IS_ACTIVE")
    private boolean active;
}
