package com.enisco.flcos.server.dto.receipt;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.supplier.SupplierDto;
import com.enisco.flcos.server.entities.enums.PackageType;
import com.enisco.flcos.server.entities.enums.UnitType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReceiptDto extends DTOBase {

    private String batchNumber;

    private SupplierDto supplier;

    private Long quantity;

    private UnitType unitType;

    private PackageType packageType;
}