package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.EquipmentDTO;
import com.enisco.flcos.server.dto.conveyingstation.ConveyingStationDto;
import com.enisco.flcos.server.dto.conveyingstation.NewConveyingStationDto;
import com.enisco.flcos.server.entities.ConveyingStationEntity;
import com.enisco.flcos.server.entities.EquipmentEntity;
import com.enisco.flcos.server.repository.relational.ConveyingStationRepository;
import com.enisco.flcos.server.repository.relational.EquipmentRepository;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

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
