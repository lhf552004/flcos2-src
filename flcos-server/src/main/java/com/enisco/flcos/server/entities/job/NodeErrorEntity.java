package com.enisco.flcos.server.entities.job;

import com.enisco.flcos.server.entities.EntityBase;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class NodeErrorEntity extends EntityBase {
    @ManyToOne(cascade = CascadeType.ALL)
    private NodeEntity node;
}
