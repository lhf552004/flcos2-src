package com.enisco.flcos.server.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "Ingredient" )
public class Ingredient {
    @Id
    private UUID id;
    private Product product;
    private double percent;
    private double targetWeight;
    private double actualWeight;
    public void setId(UUID id) {
        this.id = id;
    }
}
