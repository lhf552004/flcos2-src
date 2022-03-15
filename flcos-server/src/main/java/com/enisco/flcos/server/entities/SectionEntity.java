package com.enisco.flcos.server.entities;

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

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "section")
    private List<EquipmentEntity> equipments;

    @Column(name = "is_manual")
    private Boolean isManual;

    @Column(name = "is_hold")
    private Boolean isHold;

    @OneToOne
    private JobEntity job;
}
