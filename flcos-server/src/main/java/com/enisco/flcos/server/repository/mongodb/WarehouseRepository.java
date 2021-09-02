package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.Warehouse;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface WarehouseRepository extends MongoRepository<Warehouse, UUID> {
}
