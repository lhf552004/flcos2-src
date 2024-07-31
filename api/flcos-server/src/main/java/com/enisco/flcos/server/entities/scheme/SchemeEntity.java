package com.enisco.flcos.server.entities.scheme;

import com.enisco.flcos.server.entities.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "sch_scheme")
@Getter
@Setter
public class SchemeEntity extends EntityBase {
    @Column
    private boolean sizeable;

    @Column
    private boolean builtin;

    @Column
    private boolean primitiv;

    @Column(name = "SCHEME_NAME", unique = true)
    private String schemeName;

    private String description;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "SCHEME_PARENT")
    @OrderBy("position")
    private List<SchemeFieldEntity> fields = new ArrayList<>();
}
