package com.enisco.flcos.server.dto.receipt;

import com.enisco.flcos.server.dto.product.ProductDTO;
import com.enisco.flcos.server.dto.supplier.SupplierDto;
import com.enisco.flcos.server.entities.enums.PackageType;
import com.enisco.flcos.server.entities.enums.UnitType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewReceiptDto {
    private String batchNumber;

    private SupplierDto supplier;

    private ProductDTO product;

    private Long quantity;

    private double perWeight;

    private UnitType unitType;

    private PackageType packageType;
}
