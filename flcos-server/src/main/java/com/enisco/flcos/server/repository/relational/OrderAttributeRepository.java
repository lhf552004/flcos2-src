package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.order.OrderAttributeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderAttributeRepository extends JpaRepository<OrderAttributeEntity, Long> {
}
