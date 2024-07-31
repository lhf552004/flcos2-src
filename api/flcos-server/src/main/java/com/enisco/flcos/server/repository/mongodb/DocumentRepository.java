package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.CspsDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface DocumentRepository extends MongoRepository<CspsDocument, UUID> {
}
