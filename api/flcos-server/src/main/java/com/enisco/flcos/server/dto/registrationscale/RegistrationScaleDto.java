package com.enisco.flcos.server.dto.registrationscale;

import com.enisco.flcos.server.dto.processstation.ProcessStationDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegistrationScaleDto extends ProcessStationDto {
    private double currentFlowRate;
    private double gcsScalingFactorFlowRate;
    private double totalWeight;
    private String state;
}
