package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.ReceiptEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptRepository extends JpaRepository<ReceiptEntity, Long> {

}
