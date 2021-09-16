package com.enisco.flcos.server.entities.scheme;

import com.enisco.flcos.server.entities.EntityBase;
import com.enisco.flcos.server.scheme.FieldAttributeType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Getter
@Setter
@Entity(name = "sch_field_attribute")
public class SchemeFieldAttribute extends EntityBase {
    @Enumerated(EnumType.STRING)
    private FieldAttributeType attribute;

    private String value;

    @Column(name = "MIN_VALUE")
    private Double minValue;

    @Column(name = "MAX_VALUE")
    private Double maxValue;
}
