package com.enisco.flcos.server.entities.scheme;

import com.enisco.flcos.server.entities.EntityBase;
import com.enisco.flcos.server.entities.enums.SchemeType;
import com.enisco.flcos.server.entities.job.AttributeChangeConsumer;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Supplier;
import java.util.stream.Stream;

@Getter
@Setter
@MappedSuperclass
public abstract class SchemeAttributeEntity<T extends SchemeAttributeEntity<?>> extends EntityBase {
    @Column(
            name = "DATA_TYPE"
    )
    SchemeType type;
    @Column(
            name = "STRING_VALUE",
            length = 512
    )
    String stringValue;
    @Column(
            name = "NUMERIC_VALUE"
    )
    Double numericValue;

    @Column(
            name = "TIME_VALUE"
    )
    @Temporal(TemporalType.TIMESTAMP)
    Date timeValue;

    @Column(
            length = 512
    )
    protected String suffix;

    @Column(
            length = 512
    )
    private String name;

    @Column
    private Serializable value;


}
