package com.enisco.flcos.server.api;

import com.enisco.flcos.server.beans.OrderManagementBean;
import com.enisco.flcos.server.dto.orders.NewOrderDto;
import com.enisco.flcos.server.dto.orders.OrderDto;
import com.enisco.flcos.server.repository.relational.OrderRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/v1/orders")
public class OrderController extends ControllerBase {
    private OrderRepository orderRepository;

    private ModelMapper modelMapper;

    OrderManagementBean orderManagementBean;
    @Autowired
    public OrderController(OrderRepository orderRepository, ModelMapper modelMapper, OrderManagementBean orderManagementBean) {
        this.orderRepository = orderRepository;
        this.modelMapper = modelMapper;
        this.orderManagementBean = orderManagementBean;
    }

    @GetMapping(path = "{id}")
    public OrderDto getOrder(@PathVariable Long id) {
        var result = orderRepository.findById(id);
        return result.map(jobEntity -> modelMapper.map(jobEntity, OrderDto.class)).orElse(null);
    }

    @GetMapping
    public List<OrderDto> getOrders(@RequestParam int page, @RequestParam int size, @RequestParam(required = false, defaultValue = "") String direct, @RequestParam(required = false, defaultValue = "id") String sortProperty) {
        return orderRepository.findAll(getPageable(page, size, direct, sortProperty))
                .toList().stream()
                .map(orderEntity -> modelMapper.map(orderEntity, OrderDto.class))
                .collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity createOrder(@RequestBody NewOrderDto newOrderDTo) {
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
}
