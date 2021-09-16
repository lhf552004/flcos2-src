package com.enisco.flcos.server.entities.job;

import com.enisco.flcos.server.entities.EntityBase;
import com.enisco.flcos.server.entities.LineEntity;
import com.enisco.flcos.server.entities.RecipeEntity;
import com.enisco.flcos.server.entities.enums.JobStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name="job")
public class JobEntity extends EntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "line")
    private LineEntity line;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "recipe")
    private RecipeEntity recipe;

    @Column(name = "target_weight")
    private long targetWeight;

    @Enumerated(EnumType.STRING)
    @Column
    private JobStatus status;

}
