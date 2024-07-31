package com.enisco.flcos.server.dto.orders;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Map;

@Getter
@Setter
public class OrderAttributeDto implements Serializable {
    private String id;
    private String name;
    private String type;
    private String value;
    private Map<String, Serializable> attributes;
}
