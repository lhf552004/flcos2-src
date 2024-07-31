package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.scale.NewScaleDto;
import com.enisco.flcos.server.dto.scale.ScaleDto;
import com.enisco.flcos.server.entities.ScaleEntity;
import com.enisco.flcos.server.repository.relational.ScaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/scales")
@RestController
public class ScaleController extends GenericControllerBase<ScaleEntity, ScaleDto, ScaleDto, NewScaleDto> {

    private final ScaleRepository scaleRepository;

    public ScaleController(@Autowired ScaleRepository scaleRepository) {
        this.scaleRepository = scaleRepository;
    }


    @Override
    JpaRepository<ScaleEntity, Long> getRepository() {
        return scaleRepository;
    }
}
