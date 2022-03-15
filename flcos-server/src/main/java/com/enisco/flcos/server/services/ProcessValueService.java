package com.enisco.flcos.server.services;

import com.enisco.flcos.server.entities.trending.ProcessVariableDefEntity;
import org.springframework.stereotype.Service;

import java.util.Map;
@Service
public interface ProcessValueService {
    public Map<String, ProcessVariableDefEntity> getAllVariableDef();
}
