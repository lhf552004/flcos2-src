package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.order.OrderAttributeEntity;
import com.enisco.flcos.server.entities.order.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderAttributeRepository extends JpaRepository<OrderAttributeEntity, Long> {
}
