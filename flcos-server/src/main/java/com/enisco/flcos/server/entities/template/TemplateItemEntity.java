package com.enisco.flcos.server.entities.template;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Getter
@Setter
@Entity
public class TemplateItemEntity extends EntityBase {
    @OneToOne
    private ProcessStepEntity processStep;
}
