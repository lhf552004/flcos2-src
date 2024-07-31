package com.enisco.flcos.server.dto.bin;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.entities.bin.BinType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BinListDto extends DTOBase {
    private String name;

    private BinType type;

    private String productName;

    private boolean isUsing;
}
