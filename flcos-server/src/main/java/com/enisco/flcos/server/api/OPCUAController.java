package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.NewUserDTO;
import com.enisco.flcos.server.dto.opcs.OpcNodeDto;
import com.enisco.flcos.server.entities.UserEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/opc")
@RestController
public class OPCUAController {

    Logger logger = LoggerFactory.getLogger(UsersController.class);

    @GetMapping
    public List<OpcNodeDto> getNodes(@RequestBody OpcNodeDto opcNodeDto) {
        return null;
    }
}
