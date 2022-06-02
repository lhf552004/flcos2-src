package com.enisco.flcos.server.beans.order;

import com.enisco.flcos.server.documents.JobChangeLogDocument;
import com.enisco.flcos.server.dto.job.MessageDto;
import com.enisco.flcos.server.dto.order.NewOrderDto;
import com.enisco.flcos.server.entities.LineEntity;
import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.enums.OrderStatus;
import com.enisco.flcos.server.entities.enums.SchemeType;
import com.enisco.flcos.server.entities.job.JobEntity;
import com.enisco.flcos.server.entities.order.OrderAttributeEntity;
import com.enisco.flcos.server.entities.order.OrderEntity;
import com.enisco.flcos.server.repository.relational.*;
import com.enisco.flcos.server.repository.mongodb.JobChangeLogRepository;
import com.enisco.flcos.server.scheme.Scheme;
import com.enisco.flcos.server.scheme.SchemeManager;
import com.enisco.flcos.server.util.MessageUtil;
import com.enisco.flcos.server.util.RepositoryUtil;
import com.enisco.flcos.server.util.SchemeUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class OrderManagementBean implements IOrderManagement {
    Logger logger = LoggerFactory.getLogger(OrderManagementBean.class);

    @Value("${order.attribute.product: product}")
    private String ATTRIBUTE_PRODUCT_NAME;

    @Value("${order.attribute.targetWeight: targetWeight}")
    private String ATTRIBUTE_TARGET_WEIGHT;

    @Value("${order.attribute.line: MIX1}")
    private String ATTRIBUTE_LINE;

    @Value("${order.scheme: Order_Scheme}")
    String schemeName;

    private final OrderRepository orderRepository;

    private final JobRepository jobRepository;

    private final ProductRepository productRepository;

    private final OrderAttributeRepository orderAttributeRepository;

    private final RecipeRepository recipeRepository;

    private final LineRepository lineRepository;

    private final SchemeManager schemeManager;

    private final JobChangeLogRepository jobChangeLogRepository;

    Scheme orderScheme;

    @Autowired
    public OrderManagementBean(
            OrderRepository orderRepository,
            JobRepository jobRepository,
            ProductRepository productRepository,
            OrderAttributeRepository orderAttributeRepository,
            RecipeRepository recipeRepository,
            LineRepository lineRepository,
            SchemeManager schemeManager,
            JobChangeLogRepository jobChangeLogRepository
    ) {
        this.orderRepository = orderRepository;
        this.jobRepository = jobRepository;
        this.lineRepository = lineRepository;
        this.productRepository = productRepository;
        this.orderAttributeRepository = orderAttributeRepository;
        this.recipeRepository = recipeRepository;
        this.schemeManager = schemeManager;
        this.jobChangeLogRepository = jobChangeLogRepository;
    }

    @Override
    public OrderEntity createOrder(Map<String, Serializable> attributes) {
        return null;
    }

    public MessageDto check(NewOrderDto orderDto) {
        var messageDto = MessageUtil.getNewMessage();
        var orderNumber = orderDto.getOrderNumber();
        var existed = orderRepository.existsByOrderNumber(orderNumber);
        if (existed) {
            messageDto.getErrors().add(String.format("Order number with %s is duplicated", orderNumber));
        }
        existed = productRepository.existsByName(orderDto.getProductName());
        if (!existed) {
            messageDto.getErrors().add("Product is not found");
        }
        var scheme = getOrderScheme();
        orderDto.getAttributes().forEach((key, value) -> {
            if (scheme.getField(key).isEmpty()) {
                messageDto.getErrors().add(String.format("Field with %s is not defined in scheme", key));
            }
        });
        return messageDto;
    }

    public OrderEntity create(OrderEntity orderEntity, Map<String, Serializable> attributes) {
        var productIsFound = false;
        var orderNumber = orderEntity.getOrderNumber();
        orderEntity.setAttributes(new HashMap<>());
        var existed = orderRepository.existsByOrderNumber(orderNumber);
        if (existed) {
            throw new OrderException(String.format("Order number with %s is duplicated", orderNumber));
        }
        if (orderEntity.getProduct() != null) {
            var productOptional = productRepository.findByName(orderEntity.getProduct().getName());
            if (productOptional.isPresent()) {
                productIsFound = true;
                orderEntity.setProduct(productOptional.get());
                RepositoryUtil.create(orderRepository, orderEntity);
            }
        }
        if (!productIsFound) {
            throw new OrderException("Product is not found");
        }
        var scheme = getOrderScheme();
        var fields = scheme.stream().collect(Collectors.toList());
        attributes.entrySet()
                .forEach(entry -> scheme.getField(entry.getKey())
                        .ifPresent(field -> {
                            createOrderAttribute(scheme, orderEntity, entry.getKey(), entry.getValue());
                        }));
        return orderEntity;
    }

    private Scheme getOrderScheme() {
        if (orderScheme == null) {
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
            ((Map<String, Serializable>) attributes.get("attributes")).entrySet()
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
            ((Map<String, Serializable>) attributes.get("attributes")).entrySet()
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
        return null;
    }

    @Override
    public void createJob(OrderEntity orderEntity) {

    }

    @Override
    public MessageDto releaseJob(OrderEntity orderEntity) {
        var messageDto = MessageUtil.getNewMessage();
        var jobEntity = new JobEntity();
        jobEntity.setStatus(JobStatus.Created);
        jobEntity.setTargetWeight(orderEntity.getTargetWeight());
        var recipeResult = recipeRepository.findByProductAndIsTemplate(orderEntity.getProduct(), true);
        if (recipeResult.isPresent()) {
            jobEntity.setRecipe(recipeResult.get());
        } else {
            messageDto.getErrors().add(String.format("Recipe Template is not found for product: %s", orderEntity.getProduct().getName()));
            return messageDto;
        }

        LineEntity line = null;
        var productionLineAttr = orderEntity.getAttributes().get(ATTRIBUTE_LINE);
        if (productionLineAttr != null) {
            var lineName = productionLineAttr.getValue().toString();
            var lineOptional = lineRepository.findByName(lineName);
            if (lineOptional.isPresent()) {
                line = lineOptional.get();
            }
        } else {
            var lines = lineRepository.findByIsProduction(true);
            if (!lines.isEmpty()) {
                line = lines.get(0);
            } else {
                messageDto.getErrors().add("Line is not found.");
                return messageDto;
            }
        }

        jobEntity.setLine(line);
        RepositoryUtil.create(jobRepository, jobEntity);

        if (jobEntity.getName() == null || jobEntity.getName().isEmpty()) {
            jobEntity.setName(jobEntity.getLine().getName() + ":" + jobEntity.getId());
        }
        RepositoryUtil.update(jobRepository, jobEntity);

        var jobChangeLogDocument = new JobChangeLogDocument();
        jobChangeLogDocument.setJobId(jobEntity.getId());
        jobChangeLogDocument.setName("Status");
        jobChangeLogDocument.setOldValue("");
        jobChangeLogDocument.setNewValue("Created");
        RepositoryUtil.create(jobChangeLogRepository, jobChangeLogDocument);
        return messageDto;
    }
}
