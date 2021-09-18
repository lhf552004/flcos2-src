package com.enisco.flcos.server.dto.orders;

import com.enisco.flcos.server.dto.templates.TemplateDto;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class OrderDto {
    private Long id;
    private String status;
    private String lastChange;
    private boolean isInternalOrder;
    private Map<String, OrderAttributeDto> attributes;
    private TemplateDto template;
}
