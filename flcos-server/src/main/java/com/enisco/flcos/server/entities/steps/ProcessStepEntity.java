package com.enisco.flcos.server.entities.steps;

import com.enisco.flcos.server.entities.Consts;
import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@Entity
@Table(name = "STEP_PROCESS_STEP")
// @formatter:on
public class ProcessStepEntity  extends EntityBase
{
    public static final String PARAMETER_NAME = "name";

    @Column(length = Consts.LENGTH_SCHEME)
    private String scheme;

    @Column(length = Consts.LENGTH_PROCESS_STEP_NAME)
    private String name;

    @Column(length = Consts.LENGTH_TRANSLATION)
    private String translation;

    @ManyToOne()
    @JoinColumn(name = "GROUP_ID")
    private ProcessStepGroupEntity group;

    @Column(length = Consts.LENGTH_CAPABILITY)
    private String capability;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "processStep")
    @MapKey(name = "name")
    private Map<String, ProcessStepFieldConfiguration> fields = new HashMap<>();

    @ElementCollection
    @CollectionTable(name = "PCS_PROCESS_STEP_WORKFLOW", joinColumns = @JoinColumn(name = "PROCESS_STEP_ID"))
    private List<WorkflowMapping> triggers = new ArrayList<>();

    @Column(length = Consts.LENGTH_WORKFLOW)
    private String workflow;

    @ElementCollection
    @CollectionTable(name = "PCS_PROCESS_STEP_POINT", joinColumns = @JoinColumn(name = "PROCESS_STEP_ID"))
    private List<ConnectionPoint> connectionPoints = new ArrayList<>();


    @Override
    public String toString()
    {
        return "ProcessStepEntity(" + getGroup() + ":" + getName() + ")";
    }


}
