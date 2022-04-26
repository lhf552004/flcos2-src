package com.enisco.flcos.server.dto.discharger;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.bin.BinDto;
import com.enisco.flcos.server.dto.equipment.EquipmentDto;
import com.enisco.flcos.server.entities.BinEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Getter
@Setter
public class DischargerDto extends EquipmentDto {
    private String name;

    private String category;

    private int priority;

    private BinDto bin;
}
