package com.enisco.flcos.server.entities.order;

import com.enisco.flcos.server.entities.EntityBase;
import com.enisco.flcos.server.entities.job.AttributeChangeConsumer;
import com.enisco.flcos.server.entities.scheme.SchemeAttributeEntity;
import com.enisco.flcos.server.entities.template.TemplateEntity;
import com.enisco.flcos.server.entities.enums.OrderStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

@Setter
@Getter
@Entity(name = "order_order")
public class OrderEntity extends EntityBase {

    @Column
    private OrderStatus status;

    @Column(name = "is_internal")
    private Boolean isInternal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TEMPLATE_ID")
    private TemplateEntity template;

    // Fetch-Type EAGER ansonsten schlagen die tests fehl
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true, mappedBy = "order")
    @MapKey(name = "name")
    private Map<String, OrderAttributeEntity> attributes = new HashMap<>();
}
