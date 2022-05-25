package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.opcs.NewOpcServerDTO;
import com.enisco.flcos.server.dto.opcs.OpcServerDTO;
import com.enisco.flcos.server.entities.opc.OPCServerEntity;
import com.enisco.flcos.server.repository.relational.OPCServerRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;


@RequestMapping("api/v1/opc-configs")
@RestController
public class OPCUAConfigController extends GenericControllerBase<OPCServerEntity, OpcServerDTO, OpcServerDTO, NewOpcServerDTO> {

    Logger logger = LoggerFactory.getLogger(OPCUAConfigController.class);

    private final OPCServerRepository opcServerRepository;

    public OPCUAConfigController(@Autowired OPCServerRepository opcServerRepository) {
        this.opcServerRepository = opcServerRepository;
    }

    @Override
    JpaRepository<OPCServerEntity, Long> getRepository() {
        return opcServerRepository;
    }
}
