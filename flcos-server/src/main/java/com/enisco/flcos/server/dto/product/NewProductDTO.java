package com.enisco.flcos.server.dto.product;

import com.enisco.flcos.server.entities.enums.ProductType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewProductDTO {

    private String name;

    private ProductType productType;
}
