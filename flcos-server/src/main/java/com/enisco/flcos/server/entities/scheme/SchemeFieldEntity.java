package com.enisco.flcos.server.entities.scheme;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "sch_field")
@Getter
@Setter
public class SchemeFieldEntity extends EntityBase {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SCHEME_PARENT")
    private SchemeEntity schemeParent;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SCHEME_TYPE")
    private SchemeEntity schemeType;

    @Column
    private Integer position;

    @Column(name = "ARRAY_SIZE")
    private Integer arraySize;

    @Column(name = "FIELD_NAME")
    private String fieldName;

    private String description;

    private String unit;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "FIELD_ID")
    @OrderBy("id")
    private List<SchemeFieldAttribute> attributes = new ArrayList<>();

//    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
//    @JoinColumn(name = "LOOKUP_ID")
//    private SchemeLookupEntity lookupEntity;
}
