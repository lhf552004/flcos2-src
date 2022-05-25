package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.filler.FillerDto;
import com.enisco.flcos.server.dto.filler.NewFillerDto;
import com.enisco.flcos.server.entities.FillerEntity;
import com.enisco.flcos.server.repository.relational.FillerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/fillers")
@RestController
public class FillerController extends GenericControllerBase<FillerEntity, FillerDto, FillerDto, NewFillerDto> {

    private final FillerRepository fillerRepository;

    public FillerController(@Autowired FillerRepository fillerRepository) {
        this.fillerRepository = fillerRepository;
    }

    @Override
    JpaRepository<FillerEntity, Long> getRepository() {
        return fillerRepository;
    }
}
