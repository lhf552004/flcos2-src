package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.LogisticUnit;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface LogisticUnitRepository extends MongoRepository<LogisticUnit, UUID> {
}
