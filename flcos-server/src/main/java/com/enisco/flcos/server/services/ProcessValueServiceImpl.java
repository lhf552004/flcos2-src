package com.enisco.flcos.server.services;

import com.enisco.flcos.server.entities.trending.ProcessVariableDefEntity;
import com.enisco.flcos.server.repository.relational.ProcessVariableDefRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class ProcessValueServiceImpl implements ProcessValueService {
    @Autowired
    ProcessVariableDefRepository processVariableDefRepository;

    private static Map<String, ProcessVariableDefEntity> maps;

    @Override
    public Map<String, ProcessVariableDefEntity> getAllVariableDef() {
        if (maps == null) {
            maps = processVariableDefRepository.findAll()
                    .stream()
                    .collect(Collectors.toMap(
                            ProcessVariableDefEntity::getVariableName,
                            Function.identity()));
        }
        return maps;
    }

    public void insertOrUpdate(ProcessVariableDefEntity processVariableDefEntity) {
        var maps = getAllVariableDef();
        maps.put(processVariableDefEntity.getVariableName(), processVariableDefEntity);
    }
}
