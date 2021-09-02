package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.Line;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface LineRepository extends MongoRepository<Line, UUID> {
}
