package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.Equipment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface EquipmentRepository extends MongoRepository<Equipment, UUID> {
}
