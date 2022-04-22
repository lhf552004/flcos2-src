package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.processstation.NewProcessStationDto;
import com.enisco.flcos.server.dto.processstation.ProcessStationDto;
import com.enisco.flcos.server.entities.ProcessStationEntity;
import com.enisco.flcos.server.repository.relational.ProcessStationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/process-stations")
@RestController
public class ProcessStationController extends GenericControllerBase<ProcessStationEntity, ProcessStationDto, NewProcessStationDto> {

    private final ProcessStationRepository processStationRepository;

    public ProcessStationController(@Autowired ProcessStationRepository processStationRepository) {
        this.processStationRepository = processStationRepository;
    }

    @Override
    JpaRepository<ProcessStationEntity, Long> getRepository() {
        return processStationRepository;
    }
}
