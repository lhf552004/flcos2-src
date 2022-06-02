package com.enisco.flcos.server.entities.order;

import com.enisco.flcos.server.entities.EntityBase;
import com.enisco.flcos.server.entities.ProductEntity;
import com.enisco.flcos.server.entities.job.AttributeChangeConsumer;
import com.enisco.flcos.server.entities.scheme.SchemeAttributeEntity;
import com.enisco.flcos.server.entities.template.TemplateEntity;
import com.enisco.flcos.server.entities.enums.OrderStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashMap;
import java.util.Map;

@Setter
@Getter
@Entity
@Table(name = "order_order", uniqueConstraints = @UniqueConstraint(name = "FLC_ORDER_NUMBER_UQ", columnNames = {"ORDER_NUMBER"}))
public class OrderEntity extends EntityBase {

    @Column(name = "ORDER_NUMBER")
    private String orderNumber;

    @Column
    private OrderStatus status;

    @Column(name = "is_internal")
    private Boolean isInternal;

    @ManyToOne(cascade = {
            CascadeType.REFRESH, CascadeType.DETACH}, fetch = FetchType.EAGER)
    private ProductEntity product;

    @Column
    private double targetWeight;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true, mappedBy = "order")
    @MapKey(name = "name")
    private Map<String, OrderAttributeEntity> attributes = new HashMap<>();
}
