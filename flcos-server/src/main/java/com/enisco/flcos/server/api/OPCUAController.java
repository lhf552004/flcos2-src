package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.Greeting;
import com.enisco.flcos.server.dto.HelloMessage;
import com.enisco.flcos.server.dto.opcs.QueryNodeDto;
import com.enisco.flcos.server.dto.opcs.QueryNodesDto;
import com.enisco.flcos.server.dto.opcs.ReadVariableDto;
import com.enisco.flcos.server.dto.opcs.WriteVariableDto;
import com.enisco.flcos.server.opc.OPCNodeList;
import com.enisco.flcos.server.opc.client.OPCClientFactory;

import org.eclipse.milo.opcua.sdk.client.nodes.UaNode;
import org.eclipse.milo.opcua.stack.core.UaException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import java.util.Map;
import java.util.Set;

@RequestMapping("api/v1/opc-ua")
@RestController
public class OPCUAController {
    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    OPCClientFactory opcClientFactory;

    @PostMapping(path = "read")
    public Object readVariable(@RequestBody ReadVariableDto readVariableDto) throws Exception {
        return opcClientFactory.readVariableNodeValue(readVariableDto.getEndPointUrl(), readVariableDto.getNodeId());
    }

    @PostMapping(path = "write")
    public ResponseEntity WriteVariable(@RequestBody WriteVariableDto readVariableDto) throws Exception {
        opcClientFactory.WriteVariable(readVariableDto.getEndPointUrl(), readVariableDto.getNodeIds(), readVariableDto.getValues());
        return ResponseEntity.ok().build();
    }

    @GetMapping(path = "variables")
    public Map<String, Object> getAllVariables() {
        return opcClientFactory.getVariables();
    }

    @PostMapping (path = "nodes")
    public OPCNodeList getNodes(@RequestBody QueryNodesDto queryNodesDto) {
        return opcClientFactory.getOpcNodeListMap().get(queryNodesDto.getEndpointUrl());
    }

    @PostMapping (path = "node")
    public UaNode getNode(@RequestBody QueryNodeDto queryNodeDto) throws UaException {
        return opcClientFactory.readNode(queryNodeDto.getEndpointUrl(), queryNodeDto.getNodeId(), queryNodeDto.getNodeClass());
    }

    @GetMapping(path = "endpointurls")
    public Set<String> getEndpointUrls() {
        return opcClientFactory.getEndpointUrls();
    }

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greeting(HelloMessage message) throws Exception {
        Thread.sleep(1000); // simulated delay
        var greeting = new Greeting();
        greeting.setContent("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
        return greeting;
    }


}