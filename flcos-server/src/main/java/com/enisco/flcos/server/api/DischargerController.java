package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.discharger.DischargerDto;
import com.enisco.flcos.server.dto.discharger.NewDischargerDto;
import com.enisco.flcos.server.entities.DischargerEntity;
import com.enisco.flcos.server.repository.relational.DischargerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/dischargers")
@RestController
public class DischargerController extends GenericControllerBase<DischargerEntity, DischargerDto, DischargerDto, NewDischargerDto> {

    private final DischargerRepository dischargerRepository;

    public DischargerController(@Autowired DischargerRepository dischargerRepository) {
        this.dischargerRepository = dischargerRepository;
    }

    @Override
    JpaRepository<DischargerEntity, Long> getRepository() {
        return dischargerRepository;
    }
}
