package com.enisco.flcos.server.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.UUID;

@Document(collection = "Job_change_log" )
public class JobChangeLogDocument {
    @Id
    private UUID id;
    private String name;
    private String jobId;
    private String newValue;
    protected String oldValue;
    private Date ts;
    private String modifiedBy;
}
