package com.enisco.flcos.server.dto.bin;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.entities.DischargerEntity;
import com.enisco.flcos.server.entities.FillerEntity;
import com.enisco.flcos.server.entities.ProductEntity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BinDto extends DTOBase {
    private String name;

    private ProductEntity product;

    private boolean isUsing;

    private DischargerEntity discharger;

    private FillerEntity filler;
}
