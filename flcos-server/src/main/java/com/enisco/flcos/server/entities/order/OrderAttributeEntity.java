package com.enisco.flcos.server.entities.order;

import com.enisco.flcos.server.entities.scheme.SchemeAttributeEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashMap;
import java.util.Map;

@Setter
@Getter
@Entity(name = "order-attribute")
public class OrderAttributeEntity extends SchemeAttributeEntity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ORDER_ID", nullable = false)
    private OrderEntity order;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "PARENT_ID", updatable = false)
    @MapKey(name = "suffix")
    private Map<String, OrderAttributeEntity> children = new HashMap<>();
}
