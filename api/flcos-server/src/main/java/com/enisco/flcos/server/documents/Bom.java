package com.enisco.flcos.server.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document(collection = "Bom" )
public class Bom {
    @Id
    private UUID id;
    private boolean isTemplate;
    private List<Ingredient> ingredients;
    public void setId(UUID id) {
        this.id = id;
    }
}
