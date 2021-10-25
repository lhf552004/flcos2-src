package com.enisco.flcos.server.entities.workflow;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Setter
@Getter
@Entity(name = "wlf_item")
public class WorkflowItemEntity extends EntityBase {
    @Column
    private String name;
    @Column
    private WorkflowItemType type;

    @OneToOne
    private WorkflowActionEntity action;

    @OneToOne
    private WorkflowItemEntity previous;

    @OneToOne
    private WorkflowItemEntity next;
}
