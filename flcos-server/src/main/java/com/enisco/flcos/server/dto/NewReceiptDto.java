package com.enisco.flcos.server.dto;

import com.enisco.flcos.server.entities.enums.PackageType;
import com.enisco.flcos.server.entities.enums.UnitType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewReceiptDto {
    private String batchNumber;

    private SupplierDto supplier;

    private Long quantity;

    private UnitType unitType;

    private PackageType packageType;
}
