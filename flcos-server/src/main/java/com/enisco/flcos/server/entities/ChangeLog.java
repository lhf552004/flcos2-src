package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@Getter
@Setter
@MappedSuperclass
public class ChangeLog extends EntityBase {
    @Temporal(TemporalType.TIMESTAMP)
    private Date ts;

    @Column(length = Consts.LENGTH_ATTRIBUTE_NAME)
    private String name;

    @Column(name = "OLD_VALUE", length = Consts.LENGTH_ATTRIBUTE_VALUE)
    private String oldValue;

    @Column(name = "NEW_VALUE", length = Consts.LENGTH_ATTRIBUTE_VALUE)
    private String newValue;
}
