package com.enisco.flcos.server.dto.orders;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.templates.TemplateDto;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class OrderDto extends DTOBase {
    private String status;
    private boolean isInternalOrder;
    private List<OrderAttributeDto> attributes = new ArrayList<>();
    private TemplateDto template;
}
