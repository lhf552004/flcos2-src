package com.enisco.flcos.server.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "Line" )
public class Line {
    @Id
    private UUID id;
    public void setId(UUID id) {
        this.id = id;
    }
}
