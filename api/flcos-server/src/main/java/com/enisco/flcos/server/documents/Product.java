package com.enisco.flcos.server.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "Product" )
public class Product {
    @Id
    private UUID id;
    private String name;
    public void setId(UUID id) {
        this.id = id;
    }
}
