package com.enisco.flcos.server.dto.orders;

import com.enisco.flcos.server.dto.templates.TemplateDto;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Getter
@Setter
public class OrderDto {
    private Long id;
    private String status;
    private String lastChange;
    private boolean isInternalOrder;
    private List<OrderAttributeDto> attributes = new ArrayList<>();
    private TemplateDto template;
}
