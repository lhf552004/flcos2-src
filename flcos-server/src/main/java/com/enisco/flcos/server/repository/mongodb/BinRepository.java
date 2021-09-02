package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.Bin;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface BinRepository extends MongoRepository<Bin, UUID> {
}
