package com.enisco.flcos.server.dto;

import com.enisco.flcos.server.entities.enums.ProductType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.List;

@Getter
@Setter
public class ProductDTO {
    private Long id;

    private String name;

    private ProductType productType;
}
