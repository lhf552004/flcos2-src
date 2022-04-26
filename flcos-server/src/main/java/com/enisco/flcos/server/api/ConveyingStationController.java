package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.conveyingstation.ConveyingStationDto;
import com.enisco.flcos.server.dto.conveyingstation.NewConveyingStationDto;
import com.enisco.flcos.server.entities.ConveyingStationEntity;
import com.enisco.flcos.server.repository.relational.ConveyingStationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/conveying-stations")
@RestController
public class ConveyingStationController extends GenericControllerBase<ConveyingStationEntity, ConveyingStationDto, NewConveyingStationDto> {

    private final ConveyingStationRepository conveyingStationRepository;

    @Autowired
    public ConveyingStationController(ConveyingStationRepository conveyingStationRepository) {
        this.conveyingStationRepository = conveyingStationRepository;
    }

    @Override
    JpaRepository<ConveyingStationEntity, Long> getRepository() {
        return conveyingStationRepository;
    }
}
