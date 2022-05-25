package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.mixer.MixerDto;
import com.enisco.flcos.server.dto.mixer.NewMixerDto;
import com.enisco.flcos.server.entities.MixerEntity;
import com.enisco.flcos.server.repository.relational.MixerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/mixers")
@RestController
public class MixerController extends GenericControllerBase<MixerEntity, MixerDto, MixerDto, NewMixerDto> {

    private final MixerRepository mixerRepository;

    public MixerController(@Autowired MixerRepository mixerRepository) {
        this.mixerRepository = mixerRepository;
    }

    @Override
    JpaRepository<MixerEntity, Long> getRepository() {
        return mixerRepository;
    }
}
