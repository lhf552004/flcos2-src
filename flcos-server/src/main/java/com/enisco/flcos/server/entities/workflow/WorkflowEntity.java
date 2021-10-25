package com.enisco.flcos.server.entities.workflow;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Setter
@Getter
@Entity(name = "wlf_work_flow")
public class WorkflowEntity extends EntityBase {

    @OneToMany
    private List<WorkflowItemEntity> items;
}
