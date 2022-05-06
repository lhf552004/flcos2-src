package com.enisco.flcos.server.documents;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.util.UUID;

@Getter
@Setter
public class DocumentBase {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private UUID id;

    @Field(name = "modified_by")
    private String modifiedBy;

    @Field(name = "created_by")
    private String createdBy;

    @Field(name = "last_modified_date")
    private Date lastModifiedDate;
}
