package com.enisco.flcos.server.dto.job;

import com.enisco.flcos.server.dto.DTOBase;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobListDto extends DTOBase {

    private String name;

    private String lineName;

    private double targetWeight;

    private double actualWeight;

    private String status;
}
