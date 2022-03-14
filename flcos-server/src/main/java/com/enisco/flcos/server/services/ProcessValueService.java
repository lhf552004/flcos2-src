package com.enisco.flcos.server.services;

import com.enisco.flcos.server.entities.trending.ProcessVariableDefEntity;

import java.util.List;
import java.util.Map;

public interface ProcessValueService {
    public Map<String, ProcessVariableDefEntity> getAllVariableDef();
}
