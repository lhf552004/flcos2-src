package com.enisco.flcos.server.dto.bin;

import com.enisco.flcos.server.entities.bin.BinType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewBinDto {
    private String name;
    private BinType type;
    private Long lineId;
}
