package com.enisco.flcos.server.documents;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.UUID;

@Document(collection = "AlarmLog")
@Getter
@Setter
public class AlarmLog {
    @Id
    private UUID id;

    @Field
    private String message;

    @Field(value = "modified_by")
    private String modifiedBy;

    @Field(name = "created_by")
    private String createdBy;

    @Field(name = "last_modified_date")
    private Date lastModifiedDate;
}
