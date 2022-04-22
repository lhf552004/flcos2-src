package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.registrationscale.NewRegistrationScaleDto;
import com.enisco.flcos.server.dto.registrationscale.RegistrationScaleDto;
import com.enisco.flcos.server.entities.RegistrationScaleEntity;
import com.enisco.flcos.server.repository.relational.RegistrationScaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/registration-scales")
@RestController
public class RegistrationScaleController extends GenericControllerBase<RegistrationScaleEntity, RegistrationScaleDto, NewRegistrationScaleDto> {

    private final RegistrationScaleRepository registrationScaleRepository;

    public RegistrationScaleController(@Autowired RegistrationScaleRepository registrationScaleRepository) {
        this.registrationScaleRepository = registrationScaleRepository;
    }

    @Override
    JpaRepository<RegistrationScaleEntity, Long> getRepository() {
        return registrationScaleRepository;
    }
}
