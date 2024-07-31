package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.enums.LineStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@Entity(name="line")
public class LineEntity extends EquipmentEntity {

    @Column
    private String name;

    @Column(name = "is_production", columnDefinition = "boolean default false")
    private boolean isProduction;

    @Column(name = "svg_up_loaded", columnDefinition = "boolean default false")
    private boolean svgUploaded;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "varchar(255) default 'Passive'")
    private LineStatus status;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "line_id")
    private List<SectionEntity> sections;
}
