package com.enisco.flcos.server.dto.orders;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Map;

@Getter
@Setter
public class NewOrderDto {
    private boolean isInternal;
    private Map<String, Serializable> attributes;
}
