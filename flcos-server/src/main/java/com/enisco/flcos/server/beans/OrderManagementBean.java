package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.dto.orders.NewOrderDto;
import com.enisco.flcos.server.dto.orders.OrderDto;
import com.enisco.flcos.server.entities.enums.OrderStatus;
import com.enisco.flcos.server.entities.enums.SchemeType;
import com.enisco.flcos.server.entities.order.OrderAttributeEntity;
import com.enisco.flcos.server.entities.order.OrderEntity;
import com.enisco.flcos.server.repository.postgresql.OrderAttributeRepository;
import com.enisco.flcos.server.repository.postgresql.OrderRepository;
import com.enisco.flcos.server.scheme.Field;
import com.enisco.flcos.server.scheme.Scheme;
import com.enisco.flcos.server.scheme.SchemeManager;
import com.enisco.flcos.server.util.RepositoryUtil;
import com.enisco.flcos.server.util.SchemeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class OrderManagementBean implements IOrderManagement {
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderAttributeRepository orderAttributeRepository;

    @Value("${order.scheme: Order_Scheme}")
    String schemeName;

    @Autowired
    SchemeManager schemeManager;

    Scheme orderScheme;

    @Override
    public void createOrder(Map<String, Serializable> attributes) {
        create(false, attributes);
    }

    private void create(boolean isInternal, Map<String, Serializable> attributes) {
        var orderEntity = new OrderEntity();
        orderEntity.setStatus(OrderStatus.NEW);
        orderEntity.setIsInternal(isInternal);
        RepositoryUtil.create(orderRepository, orderEntity);
        var scheme = getOrderScheme();
        var fields = scheme.stream().collect(Collectors.toList());
        attributes.entrySet()
                .forEach(entry -> scheme.getField(entry.getKey())
                        .ifPresent(field -> {
                            createOrderAttribute(scheme, orderEntity, entry.getKey(), entry.getValue());
                        }));
    }

    private Scheme getOrderScheme() {
        if(orderScheme == null) {
            orderScheme = SchemeUtil.assertSchemeExists(schemeManager, this.schemeName);
        }
        return orderScheme;
    }

//    public Map<String, Serializable> attributesAsMap(NewOrderDto orderDto)
//    {
//        var result = new HashMap<String, Serializable>();
//
//        for ( var attribute : orderDto.getAttributes() )
//        {
//            getOrderScheme().getField(attribute.getId())
//                    .filter(Field::isPrimitive)
//                    .ifPresent(field -> result.put(attribute.getId(), (Serializable) attribute.getValue()));
//        }
//
//        return result;
//    }

    private void createOrderAttribute(Scheme scheme, OrderEntity order, String key, Serializable value) {
        SchemeType schemeType = SchemeType.valueOf(value);
        var orderAttribute = new OrderAttributeEntity();
        orderAttribute.setOrder(order);
        orderAttribute.setName(key);
        orderAttribute.setType(schemeType);
        RepositoryUtil.create(orderAttributeRepository, orderAttribute);
        if (schemeType == SchemeType.STRUCT) {
            Map<String, Serializable> attributes = (Map<String, Serializable>) schemeType.convertTo(value);
            ((Map<String, Serializable>)attributes.get("attributes")).entrySet()
                    .forEach(entry -> scheme.getField(key + "." + entry.getKey())
                            .ifPresent(field -> {
                                createOrderAttribute(scheme, orderAttribute, order, key + "." + entry.getKey(), entry.getValue());
                            }));
        } else {
            orderAttribute.setValue(value);
            RepositoryUtil.update(orderAttributeRepository, orderAttribute);
        }
    }

    private void createOrderAttribute(Scheme scheme, OrderAttributeEntity parent, OrderEntity order, String key, Serializable value) {
        SchemeType schemeType = SchemeType.valueOf(value);
        var orderAttribute = new OrderAttributeEntity();
        orderAttribute.setName(key);
        orderAttribute.setType(schemeType);
        orderAttribute.setOrder(order);
        RepositoryUtil.create(orderAttributeRepository, orderAttribute);

        parent.getChildren().put(key, orderAttribute);
        RepositoryUtil.create(orderAttributeRepository, parent);

        if (schemeType == SchemeType.STRUCT) {
            Map<String, Serializable> attributes = (Map<String, Serializable>) schemeType.convertTo(value);
            ((Map<String, Serializable>)attributes.get("attributes")).entrySet()
                    .forEach(entry -> scheme.getField(key + "." + entry.getKey())
                            .ifPresent(field -> {
                                createOrderAttribute(scheme, orderAttribute, order, key + "." + entry.getKey(), entry.getValue());
                            }));
        } else {
            orderAttribute.setValue(value);
            RepositoryUtil.update(orderAttributeRepository, orderAttribute);
        }
    }

    @Override
    public void createInternal(Map<String, Serializable> attributes) {
        create(true, attributes);
    }

    @Override
    public void createJob(OrderEntity orderEntity) {

    }

    @Override
    public void releaseJob(OrderEntity orderEntity) {

    }
}
