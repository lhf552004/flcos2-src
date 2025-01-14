package com.enisco.flcos.server.entities.template;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class TemplateEntity extends EntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
}
