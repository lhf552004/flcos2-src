package com.enisco.flcos.server.dto.mixer;

import com.enisco.flcos.server.dto.processstation.ProcessStationDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MixerDto extends ProcessStationDto {
    private String mixerType;

    private double capacityMin;

    private double capacityMax;

    private double weightMin;

    private double weightMax;

    private int mixTimePre;

    private int mixTime;

    private int mixTimePost;

    private int emptyDelay;
}
