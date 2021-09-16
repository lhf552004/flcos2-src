package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.job.JobEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@Entity(name="section")
public class SectionEntity extends EntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "section")
    private List<EquipmentEntity> equipments;

    @OneToOne
    private JobEntity job;
}
