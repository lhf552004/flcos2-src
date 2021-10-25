package com.enisco.flcos.server.entities.workflow;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;

@Setter
@Getter
@Entity(name = "wlf_work_action")
public class WorkflowActionEntity extends EntityBase {
    @Column
    private Boolean internal;

    @Column(name = "class_name")
    private String className;

    @Column(name = "kafka_topic")
    private String kafkaTopic;

    @Column(name = "kafka_group")
    private String kafkaGroup;

}
