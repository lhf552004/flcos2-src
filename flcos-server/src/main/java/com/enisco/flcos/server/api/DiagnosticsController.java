package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.DataDto;
import com.enisco.flcos.server.opc.client.ClientExampleRunner;
import com.enisco.flcos.server.opc.client.ReadExample;
import com.enisco.flcos.server.repository.mongodb.LineRepository;
import com.google.common.collect.ImmutableList;
import org.eclipse.milo.opcua.stack.core.Identifiers;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.enumerated.ServerState;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@RequestMapping("api/v1/diagnostics")
@RestController
public class DiagnosticsController {
    private final Logger logger = LoggerFactory.getLogger(getClass());
    ReadExample example;
    public DiagnosticsController() throws Exception {
        example = new ReadExample();

    }
    @GetMapping
    public List<DataDto> read() throws Exception {
        List<NodeId> nodeIds = ImmutableList.of(
                Identifiers.Server_ServerStatus_State,
                Identifiers.Server_ServerStatus_CurrentTime);
        new ClientExampleRunner(example, true).run();
        var results = example.readServerStateAndTime(nodeIds).get();
        example.finishFuture();
        return results.stream().map(dataValue -> DataDto.of(dataValue)).collect(Collectors.toList());
    }
}
