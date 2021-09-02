package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface JobRepository extends MongoRepository<Job, UUID> {
}
