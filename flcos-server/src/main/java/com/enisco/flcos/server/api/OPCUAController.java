package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.Greeting;
import com.enisco.flcos.server.dto.HelloMessage;
import com.enisco.flcos.server.dto.opcs.*;
import com.enisco.flcos.server.opc.OPCNodeList;
import com.enisco.flcos.server.opc.client.OPCClientFactory;

import com.enisco.flcos.server.services.ProcessValueServiceImpl;
import org.eclipse.milo.opcua.sdk.client.nodes.UaNode;
import org.eclipse.milo.opcua.stack.core.UaException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@RequestMapping("api/v1/opc-ua")
@RestController
public class OPCUAController {
    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    OPCClientFactory opcClientFactory;

    @Autowired
    ProcessValueServiceImpl processValueService;

    @PostMapping(path = "read")
    public Object readVariable(@RequestBody ReadVariableDto readVariableDto) throws Exception {
        return opcClientFactory.readVariableNodeValue(readVariableDto.getEndPointUrl(), readVariableDto.getNodeId());
    }

    @PostMapping(path = "write")
    public ResponseEntity WriteVariable(@RequestBody WriteVariableDto readVariableDto) throws Exception {
        opcClientFactory.WriteVariable(readVariableDto.getEndpointUrl(), readVariableDto.getNodeIds(), readVariableDto.getValues());
        return ResponseEntity.ok().build();
    }

    @GetMapping(path = "variables")
    public Map<String, Object> getAllVariables() {
        return opcClientFactory.getVariables();
    }

    @PostMapping(path = "variables")
    public Map<String, Object> getVariables(@RequestBody QueryVariablesDto queryVariablesDto) {
        Map<String, Object> filtered = new HashMap<>();
        opcClientFactory.getVariables()
                .entrySet().stream().filter(entry -> queryVariablesDto.getVariables().contains(entry.getKey()))
                .forEach(entry -> filtered.put(entry.getKey(), entry.getValue()));
        return filtered;
    }

    @GetMapping(path = "nodes")
    public OPCNodeList getNodes() {
        return (OPCNodeList) opcClientFactory.getOpcNodeListMap().values().toArray()[0];
    }

    @PostMapping(path = "node")
    public OpcNodeDto getNode(@RequestBody QueryNodeDto queryNodeDto) throws UaException {
        return opcClientFactory.readNode(queryNodeDto.getEndpointUrl(), queryNodeDto.getNodeId(), queryNodeDto.getNodeClass());
    }

    @GetMapping(path = "endpointurls")
    public Set<String> getEndpointUrls() {
        return opcClientFactory.getEndpointUrls();
    }


}
