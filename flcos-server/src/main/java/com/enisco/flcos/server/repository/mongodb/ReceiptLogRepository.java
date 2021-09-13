package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.CspsDocument;
import com.enisco.flcos.server.documents.ReceiptLogDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ReceiptLogRepository extends MongoRepository<ReceiptLogDocument, UUID> {
}
