package com.enisco.flcos.server.api;

import com.enisco.flcos.server.documents.Line;
import com.enisco.flcos.server.dto.UserDto;
import com.enisco.flcos.server.dto.opcs.NewOpcServerDTO;
import com.enisco.flcos.server.dto.opcs.OpcNodeDto;
import com.enisco.flcos.server.dto.opcs.OpcServerDTO;
import com.enisco.flcos.server.entities.UserEntity;
import com.enisco.flcos.server.entities.opc.OPCServerEntity;
import com.enisco.flcos.server.repository.postgresql.OPCServerRepository;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@RequestMapping("api/v1/opc-configs")
@RestController
public class OPCUAConfigController {

    Logger logger = LoggerFactory.getLogger(OPCUAConfigController.class);

    @Autowired
    private OPCServerRepository opcServerRepository;
    @Autowired
    private ModelMapper modelMapper;

    @PostMapping
    public long createOPC(@RequestBody NewOpcServerDTO opcServerDTO){
        var opcServerEntity = modelMapper.map(opcServerDTO, OPCServerEntity.class);
        RepositoryUtil.create(opcServerRepository, opcServerEntity);
        return opcServerEntity.getId();
    }

    @GetMapping
    public List<OpcServerDTO> getOPCServers() {
        return opcServerRepository.findAll().stream()
                .map(opcServerEntity -> modelMapper.map(opcServerEntity, OpcServerDTO.class))
                .collect(Collectors.toList());
    }

    @GetMapping(path = "{id}")
    public OpcServerDTO getOpcServer(@PathVariable Long id){
        var result = opcServerRepository.findById(id);
        return result.map(opcServerDTO -> modelMapper.map(opcServerDTO, OpcServerDTO.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public ResponseEntity updateOPCServer(@PathVariable Long id, @RequestBody OpcServerDTO opcServerDTO){
        var result = opcServerRepository.findById(id);
        if (result.isPresent()) {
            var opcServerEntity = modelMapper.map(opcServerDTO, OPCServerEntity.class);
            RepositoryUtil.update(opcServerRepository, opcServerEntity);
            return ResponseEntity.ok(opcServerEntity.getId());
        } else{
            logger.error("User {} not found", id);
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity deleteOPCServer(@PathVariable Long id){
        var result = opcServerRepository.findById(id);
        if (result.isPresent()) {
            opcServerRepository.delete(result.get());
            return ResponseEntity.ok().build();
        } else{
            logger.error("User {} not found", id);
            return ResponseEntity.notFound().build();
        }
    }

}
