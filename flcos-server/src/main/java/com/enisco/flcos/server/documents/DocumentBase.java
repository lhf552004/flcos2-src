package com.enisco.flcos.server.documents;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;
import java.util.Date;
import java.util.UUID;

@Getter
@Setter
public class DocumentBase {
    @Id
    private UUID id;

    @Field(name = "modified_by")
    private String modifiedBy;

    @Field(name = "created_by")
    private String createdBy;

    @Field(name = "last_modified_date")
    private Date lastModifiedDate;
}
