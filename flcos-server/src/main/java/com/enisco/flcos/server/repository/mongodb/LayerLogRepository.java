package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.LogisticUnitLogDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface LayerLogRepository extends MongoRepository<LogisticUnitLogDocument, UUID> {
}
