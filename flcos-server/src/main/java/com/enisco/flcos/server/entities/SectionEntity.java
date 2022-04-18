package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.enums.LineStatus;
import com.enisco.flcos.server.entities.job.JobEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@Entity(name="section")
public class SectionEntity extends GCObjectBase {
    @Column
    private Integer index;

    @Column
    private String name;

    @Enumerated(EnumType.STRING)
    @Column
    private LineStatus status;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "section")
    private List<EquipmentEntity> equipments;

    @Column(name = "is_manual", columnDefinition = "boolean default false")
    private boolean isManual;

    @Column(name = "is_hold", columnDefinition = "boolean default false")
    private boolean isHold;

    @OneToOne
    private JobEntity job;

    @ManyToOne
    private LineEntity line;
}
