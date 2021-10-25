package com.enisco.flcos.server.entities.template;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity(name = "template_template")
public class TemplateEntity extends EntityBase {
    private Boolean complete;

    @OneToMany
    private List<TemplateItemEntity> items;
}
