package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.JobEntity;
import com.enisco.flcos.server.entities.ReceiptEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReceiptRepository extends JpaRepository<ReceiptEntity, Long> {

}
