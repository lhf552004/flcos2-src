package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.ReceiptEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptRepository extends JpaRepository<ReceiptEntity, Long> {

}
