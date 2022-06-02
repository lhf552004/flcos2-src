package com.enisco.flcos.server.entities.recipe;

import com.enisco.flcos.server.entities.EntityBase;
import com.enisco.flcos.server.entities.LineEntity;
import com.enisco.flcos.server.entities.ProductEntity;
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
    private String name;

    @Column(name = "is_template")
    private boolean isTemplate;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "recipe_id")
    private List<IngredientEntity> ingredients;

    @OneToOne(cascade = {
            CascadeType.REFRESH, CascadeType.DETACH}, fetch = FetchType.EAGER)
    private LineEntity line;

    @OneToOne(cascade = {
            CascadeType.REFRESH, CascadeType.DETACH}, fetch = FetchType.EAGER)
    private JobEntity job;

    @OneToOne(cascade = {
            CascadeType.REFRESH, CascadeType.DETACH}, fetch = FetchType.EAGER)
    private ProductEntity product;
}
