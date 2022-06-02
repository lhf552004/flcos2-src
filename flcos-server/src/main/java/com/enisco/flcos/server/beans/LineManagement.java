package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.dto.job.MessageDto;
import com.enisco.flcos.server.entities.LineEntity;
import com.enisco.flcos.server.entities.enums.LineStatus;
import com.enisco.flcos.server.opc.client.OPCClientFactory;
import com.enisco.flcos.server.repository.relational.LineRepository;
import com.enisco.flcos.server.util.MessageUtil;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@Component
public class LineManagement {
    Logger logger = LoggerFactory.getLogger(LineManagement.class);

    private final LineRepository lineRepository;
    private final OPCClientFactory opcClientFactory;

    @Value("${online.mode}")
    private boolean onlineMode;

    @Autowired
    public LineManagement(LineRepository lineRepository,
                          OPCClientFactory opcClientFactory
    ) {
        this.lineRepository = lineRepository;
        this.opcClientFactory = opcClientFactory;
    }

    public MessageDto reset(LineEntity lineEntity) {
        var messageDto = MessageUtil.getNewMessage();
        if (onlineMode) {
            var variableNames = new ArrayList<String>();
            var variableValues = new ArrayList<>();
            var cmd = lineEntity.getOpcVariableIdent() + "/cmd";
            variableNames.add(cmd);
            variableValues.add(CommandType.Reset);
            var opcClient = opcClientFactory.getEndpointUrls().toArray()[0].toString();
            try {
                opcClientFactory.WriteVariable(opcClient, variableNames, variableValues);
            } catch (ExecutionException | InterruptedException e) {
                changeStatus(lineEntity, LineStatus.Error);
                logger.error(e.getMessage(), e);
                messageDto.getErrors().add(e.getMessage());
            }
        }
        return messageDto;
    }

    public void changeStatus(LineEntity line, LineStatus newStatus) {
        if (line.getStatus() != newStatus) {
            line.setStatus(newStatus);
            RepositoryUtil.update(lineRepository, line);
        }
    }

}
