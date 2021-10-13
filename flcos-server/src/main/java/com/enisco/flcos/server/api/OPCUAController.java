package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.DataDto;
import com.enisco.flcos.server.dto.opcs.ReadVariableDto;
import com.enisco.flcos.server.dto.opcs.WriteVariableDto;
import com.enisco.flcos.server.opc.client.OPCClientFactory;
import com.enisco.flcos.server.opc.client.OPCClientHandler;
import com.enisco.flcos.server.opc.client.ReadExample;
import com.google.common.collect.ImmutableList;
import org.eclipse.milo.opcua.stack.core.Identifiers;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequestMapping("api/v1/opc-ua")
@RestController
public class OPCUAController {
    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    OPCClientFactory opcClientFactory;

    @PostMapping(path = "read")
    public Object readVariable(@RequestBody ReadVariableDto readVariableDto) throws Exception {
        return opcClientFactory.readVariable(readVariableDto.getEndPointUrl(), readVariableDto.getNodeId());
    }

    @PostMapping(path = "write")
    public ResponseEntity WriteVariable(@RequestBody WriteVariableDto readVariableDto) throws Exception {
        opcClientFactory.WriteVariable(readVariableDto.getEndPointUrl(), readVariableDto.getNodeIds(), readVariableDto.getValues());
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public Map<String, Object> getAllVariables() {
        return opcClientFactory.getVariables();
    }
}
