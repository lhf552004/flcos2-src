package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.enums.LineStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@Entity(name="line")
public class LineEntity extends EntityBase {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;

    @Column
    private String name;

    @Column(name = "is_production")
    private Boolean isProduction;

    @Column(name = "svg_up_loaded")
    private Boolean svgUploaded;

    @Enumerated(EnumType.STRING)
    @Column
    private LineStatus status;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "line")
    private List<SectionEntity> sections;
}
