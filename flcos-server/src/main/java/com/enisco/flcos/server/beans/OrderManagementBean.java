package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.api.UsersController;
import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.enums.OrderStatus;
import com.enisco.flcos.server.entities.enums.SchemeType;
import com.enisco.flcos.server.entities.job.JobChangeLogEntity;
import com.enisco.flcos.server.entities.job.JobEntity;
import com.enisco.flcos.server.entities.order.OrderAttributeEntity;
import com.enisco.flcos.server.entities.order.OrderEntity;
import com.enisco.flcos.server.repository.relational.*;
import com.enisco.flcos.server.scheme.Scheme;
import com.enisco.flcos.server.scheme.SchemeManager;
import com.enisco.flcos.server.util.RepositoryUtil;
import com.enisco.flcos.server.util.SchemeUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class OrderManagementBean implements IOrderManagement {
    Logger logger = LoggerFactory.getLogger(OrderManagementBean.class);

    @Value("${order.attribute.product: product}")
    private String ATTRIBUTE_PRODUCT_NAME;

    @Value("${order.attribute.targetWeight: targetWeight}")
    private String ATTRIBUTE_TARGET_WEIGHT;

    @Value("${order.attribute.line: line}")
    private String ATTRIBUTE_LINE;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    JobRepository jobRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    OrderAttributeRepository orderAttributeRepository;

    @Autowired
    RecipeRepository recipeRepository;

    @Autowired
    LineRepository lineRepository;

    @Value("${order.scheme: Order_Scheme}")
    String schemeName;

    @Autowired
    SchemeManager schemeManager;

    Scheme orderScheme;

    @Override
    public OrderEntity createOrder(Map<String, Serializable> attributes) {
        return create(false, attributes);
    }

    private OrderEntity create(boolean isInternal, Map<String, Serializable> attributes) {
        var orderEntity = new OrderEntity();
        orderEntity.setStatus(OrderStatus.NEW);
        orderEntity.setIsInternal(isInternal);

        var productName = attributes.get(ATTRIBUTE_PRODUCT_NAME).toString();
        if( productName.isEmpty()) {
            throw new OrderException("Product name is empty or not found in attribute.");
        }
        var productResult = productRepository.findByName(productName);
        if(productResult.isPresent()) {
            orderEntity.setProduct(productResult.get());
        }else {
            throw new OrderException(String.format("Product is not found with name %s.", productName));
        }
        try
        {
            var targetWeight = Double.parseDouble(attributes.get(ATTRIBUTE_TARGET_WEIGHT).toString());
            orderEntity.setTargetWeight(targetWeight);
        }catch (Exception ex) {
            logger.warn("There is exception when try to parse target weight: " + ex.getMessage());
        }

        RepositoryUtil.create(orderRepository, orderEntity);
        var scheme = getOrderScheme();
        var fields = scheme.stream().collect(Collectors.toList());
        attributes.entrySet()
                .forEach(entry -> scheme.getField(entry.getKey())
                        .ifPresent(field -> {
                            createOrderAttribute(scheme, orderEntity, entry.getKey(), entry.getValue());
                        }));
        if(!isInternal) {
            // create job
            createJob(orderEntity);
        }
        return orderEntity;
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
    public OrderEntity createInternal(Map<String, Serializable> attributes) {
        return create(true, attributes);
    }

    @Override
    public void createJob(OrderEntity orderEntity) {
        var job = new JobEntity();
        job.setStatus(JobStatus.Created);
        job.setTargetWeight(orderEntity.getTargetWeight());
        var recipeResult = recipeRepository.findByProductAndIsTemplate(orderEntity.getProduct(), true);
        if(recipeResult.isPresent()) {
            job.setRecipe(recipeResult.get());
        }else {
            throw new JobException(String.format("Recipe Template is not found for product: %s", orderEntity.getProduct().getName()));
        }
        var lines =lineRepository.findByIsProduction(true);
        job.setLine(lines.get(0));
//        job.setChangeLogs(new ArrayList<>());
        RepositoryUtil.create(jobRepository, job);
        var changeLog = new JobChangeLogEntity();
        changeLog.setJob(job);
        changeLog.setName("Create Job");
        changeLog.setNewValue(job.getId().toString());
//        job.getChangeLogs().add(changeLog);
        RepositoryUtil.update(jobRepository, job);
    }

    @Override
    public void releaseJob(OrderEntity orderEntity) {

    }
}
