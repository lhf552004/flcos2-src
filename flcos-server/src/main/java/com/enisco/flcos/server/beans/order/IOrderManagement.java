package com.enisco.flcos.server.beans.order;

import com.enisco.flcos.server.dto.job.MessageDto;
import com.enisco.flcos.server.entities.order.OrderEntity;

import java.io.Serializable;
import java.util.Map;

public interface IOrderManagement {
    OrderEntity createOrder(Map<String, Serializable> attributes);
    OrderEntity createInternal(Map<String, Serializable> attributes);
    void createJob(OrderEntity orderEntity);

    MessageDto releaseJob(OrderEntity orderEntity);
}
