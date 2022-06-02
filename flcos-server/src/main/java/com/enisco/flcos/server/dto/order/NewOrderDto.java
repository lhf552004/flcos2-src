package com.enisco.flcos.server.dto.order;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Map;

@Getter
@Setter
public class NewOrderDto {
    private boolean isInternal;
    private String orderNumber;
    private String productName;
    private double targetWeight;
    private Map<String, Serializable> attributes;
}
