package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.DataDto;
import com.enisco.flcos.server.opc.client.ClientExampleRunner;
import com.enisco.flcos.server.opc.client.ReadExample;
import com.enisco.flcos.server.repository.mongodb.LineRepository;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
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
        new ClientExampleRunner(example, true).run();
    }
    @GetMapping
    public List<DataDto> read() throws ExecutionException, InterruptedException {
        var results = example.readServerStateAndTime().get();
        return results.stream().map(dataValue -> DataDto.of(dataValue)).collect(Collectors.toList());
    }
}
