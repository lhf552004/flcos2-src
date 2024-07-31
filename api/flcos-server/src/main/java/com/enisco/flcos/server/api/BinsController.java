package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.RenameDTO;
import com.enisco.flcos.server.dto.bin.BinDto;
import com.enisco.flcos.server.dto.bin.BinListDto;
import com.enisco.flcos.server.dto.bin.NewBinDto;
import com.enisco.flcos.server.entities.bin.BinEntity;
import com.enisco.flcos.server.repository.relational.BinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/v1/bins")
@RestController
public class BinsController extends GenericControllerBase<BinEntity, BinDto, BinListDto, NewBinDto> {

    private final BinRepository binRepository;

    @Autowired
    public BinsController(BinRepository binRepository) {
        this.binRepository = binRepository;
    }

    @Override
    JpaRepository<BinEntity, Long> getRepository() {
        return binRepository;
    }
}
