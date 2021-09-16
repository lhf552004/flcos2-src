package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.entities.order.OrderEntity;

import java.io.Serializable;
import java.util.Map;

public interface IOrderManagement {
    void createOrder(Map<String, Serializable> attributes);
    void createInternal(Map<String, Serializable> attributes);
    void createJob(OrderEntity orderEntity);

    void releaseJob(OrderEntity orderEntity);
}
