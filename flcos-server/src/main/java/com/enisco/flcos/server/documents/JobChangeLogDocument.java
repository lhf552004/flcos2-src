package com.enisco.flcos.server.documents;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@Document(collection = "Job_change_log" )
public class JobChangeLogDocument extends ChangeLogDocument {

    @Field(name = "job_id")
    private Long jobId;
}
