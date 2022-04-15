package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.AlarmLog;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface AlarmLogRepository extends MongoRepository<AlarmLog, UUID> {
}
