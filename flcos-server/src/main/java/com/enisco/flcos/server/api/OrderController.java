package com.enisco.flcos.server.api;

import com.enisco.flcos.server.beans.OrderManagementBean;
import com.enisco.flcos.server.dto.orders.NewOrderDto;
import com.enisco.flcos.server.dto.orders.OrderDto;
import com.enisco.flcos.server.entities.order.OrderEntity;
import com.enisco.flcos.server.repository.relational.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/orders")
public class OrderController extends GenericControllerBase<OrderEntity, OrderDto, NewOrderDto>{
    private final OrderRepository orderRepository;

    private final OrderManagementBean orderManagementBean;

    @Autowired
    public OrderController(OrderRepository orderRepository, OrderManagementBean orderManagementBean) {
        this.orderRepository = orderRepository;
        this.orderManagementBean = orderManagementBean;
    }

    @Override
    @PostMapping
    public ResponseEntity create(@RequestBody NewOrderDto newOrderDTo) {
        if (newOrderDTo.isInternal())
            orderManagementBean.createInternal(newOrderDTo.getAttributes());
        else
            orderManagementBean.createOrder(newOrderDTo.getAttributes());
        return ResponseEntity.ok().build();
    }

    @PostMapping(path = "/{id}/create-job")
    public void createJob() {

    }

    @PutMapping(path = "/{id}/release-job")
    public void releaseJob() {

    }

    @Override
    JpaRepository<OrderEntity, Long> getRepository() {
        return orderRepository;
    }
}
