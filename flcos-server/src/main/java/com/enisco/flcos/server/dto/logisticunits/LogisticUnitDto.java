package com.enisco.flcos.server.dto.logisticunits;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.NameDto;
import com.enisco.flcos.server.entities.enums.PackageType;
import com.enisco.flcos.server.entities.enums.UnitType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LogisticUnitDto extends DTOBase {

    private String batchNumber;

    private String supplier;

    private String product;

    private UnitType unitType;

    private PackageType packageType;

    private NameDto warehouse;

    private long targetWeight;

    private long actualWeight;

    private boolean opened;
}
