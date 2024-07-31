package com.enisco.flcos.server.dto.bin;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.NameDto;
import com.enisco.flcos.server.entities.bin.BinType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BinDto extends DTOBase {
    private String name;

    private BinType type;

    private String lineId;

    private NameDto product;

    private boolean isUsing;

    private NameDto discharger;

    private NameDto filler;
}
