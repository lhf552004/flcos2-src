package com.enisco.flcos.server.documents;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Getter
@Setter
@ToString
@Document(collection = "Document" )
public class CspsDocument {
    @Id
    private UUID id;
    private String content;
    private String title;

    public void setId(UUID id) {
        this.id = id;
    }


}
