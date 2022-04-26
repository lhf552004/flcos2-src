package com.enisco.flcos.server.dto.processstation;

import com.enisco.flcos.server.dto.discharger.DischargerDto;
import com.enisco.flcos.server.dto.equipment.EquipmentDto;
import com.enisco.flcos.server.dto.filler.FillerDto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ProcessStationDto extends EquipmentDto {
    private String name;

    private int index;

    private List<DischargerDto> dischargers;

    private List<FillerDto> fillers;
}
