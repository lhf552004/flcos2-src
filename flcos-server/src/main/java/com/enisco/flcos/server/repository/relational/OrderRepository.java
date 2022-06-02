package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.order.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
    boolean existsByOrderNumber(String orderNumber);
    Optional<OrderEntity> findByOrderNumber(String orderNumber);
}
