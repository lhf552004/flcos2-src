package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.JobChangeLogDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface JobChangeLogRepository extends MongoRepository<JobChangeLogDocument, UUID> {
}
