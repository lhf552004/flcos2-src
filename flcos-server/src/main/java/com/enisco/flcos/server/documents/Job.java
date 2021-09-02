package com.enisco.flcos.server.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "Job" )
public class Job {
    @Id
    private UUID id;
    private double targetWeight;
    private double actualWeight;
    private Bom bom;
    public void setId(UUID id) {
        this.id = id;
    }
}
