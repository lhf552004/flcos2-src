package com.enisco.flcos.server.entities.job;

import com.enisco.flcos.server.entities.EntityBase;
import com.enisco.flcos.server.entities.LineEntity;
import com.enisco.flcos.server.entities.recipe.RecipeEntity;
import com.enisco.flcos.server.entities.enums.JobStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name = "job")
public class JobEntity extends EntityBase {

    @Column
    private String name;

    @OneToOne(cascade = {CascadeType.MERGE, CascadeType.REMOVE,
            CascadeType.REFRESH, CascadeType.DETACH}, fetch = FetchType.EAGER)
    @JoinColumn(name = "line_id")
    private LineEntity line;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "recipe_id")
    private RecipeEntity recipe;

    @Column(name = "target_weight")
    private double targetWeight;

    @Column(name = "actual_weight")
    private double actualWeight;

    @Enumerated(EnumType.STRING)
    @Column
    private JobStatus status;

}
