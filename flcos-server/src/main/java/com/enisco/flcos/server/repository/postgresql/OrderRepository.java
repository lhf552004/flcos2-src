package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.order.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
}
