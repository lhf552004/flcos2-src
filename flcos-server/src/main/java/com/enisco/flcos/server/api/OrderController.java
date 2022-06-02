package com.enisco.flcos.server.api;

import com.enisco.flcos.server.beans.order.OrderManagementBean;
import com.enisco.flcos.server.dto.job.MessageDto;
import com.enisco.flcos.server.dto.order.NewOrderDto;
import com.enisco.flcos.server.dto.order.OrderDto;
import com.enisco.flcos.server.entities.order.OrderEntity;
import com.enisco.flcos.server.repository.relational.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/orders")
public class OrderController extends GenericControllerBase<OrderEntity, OrderDto, OrderDto, NewOrderDto> {
    private final OrderRepository orderRepository;

    private final OrderManagementBean orderManagementBean;

    @Autowired
    public OrderController(OrderRepository orderRepository, OrderManagementBean orderManagementBean) {
        this.orderRepository = orderRepository;
        this.orderManagementBean = orderManagementBean;
    }

    @PostMapping(path = "check")
    public ResponseEntity<MessageDto> check(@RequestBody NewOrderDto newOrderDTo) {
        var messageDto = orderManagementBean.check(newOrderDTo);
        return ResponseEntity.ok(messageDto);
    }

    @Override
    @PostMapping
    public ResponseEntity<Long> create(@RequestBody NewOrderDto newOrderDTo) {
        var orderEntity = modelMapper.map(newOrderDTo, OrderEntity.class);
        orderManagementBean.create(orderEntity, newOrderDTo.getAttributes());
        return ResponseEntity.ok(orderEntity.getId());
    }

    @PutMapping(path = "/{id}/release-job")
    public ResponseEntity<MessageDto> releaseJob(@PathVariable Long id) {
        var orderOptional = orderRepository.findById(id);
        if (orderOptional.isPresent()) {
            var messageDto = this.orderManagementBean.releaseJob(orderOptional.get());
            return ResponseEntity.ok(messageDto);
        }
        return ResponseEntity.notFound().build();
    }

    @Override
    JpaRepository<OrderEntity, Long> getRepository() {
        return orderRepository;
    }
}
