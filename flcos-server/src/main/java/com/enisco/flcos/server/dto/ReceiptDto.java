package com.enisco.flcos.server.dto;

import com.enisco.flcos.server.dto.supplier.SupplierDto;
import com.enisco.flcos.server.entities.enums.PackageType;
import com.enisco.flcos.server.entities.enums.UnitType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReceiptDto {
    private Long id;

    private String batchNumber;

    private SupplierDto supplier;

    private Long quantity;

    private UnitType unitType;

    private PackageType packageType;
}
