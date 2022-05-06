package com.enisco.flcos.server.entities;

import com.enisco.flcos.server.entities.job.JobEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@Entity(name="recipe")
public class RecipeEntity extends EntityBase {

    @Column
    private boolean name;

    @Column(name = "is_template")
    private boolean isTemplate;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "recipe")
    private List<IngredientEntity> ingredients;

    @OneToOne(cascade = CascadeType.ALL)
    private LineEntity line;

    @OneToOne(cascade = CascadeType.ALL)
    private JobEntity job;

    @OneToOne(cascade = CascadeType.ALL)
    private ProductEntity product;
}
