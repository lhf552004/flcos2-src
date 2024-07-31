package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.trending.NewProcessVariableDTO;
import com.enisco.flcos.server.dto.trending.ProcessVariableDTO;
import com.enisco.flcos.server.entities.trending.ProcessVariableDefEntity;
import com.enisco.flcos.server.repository.relational.ProcessVariableDefRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/process-variables")
@RestController
public class ProcessVariablesController extends GenericControllerBase<ProcessVariableDefEntity, ProcessVariableDTO, ProcessVariableDTO, NewProcessVariableDTO> {

    private final ProcessVariableDefRepository processVariableDefRepository;

    public ProcessVariablesController(@Autowired ProcessVariableDefRepository processVariableDefRepository) {
        this.processVariableDefRepository = processVariableDefRepository;
    }

    @Override
    JpaRepository<ProcessVariableDefEntity, Long> getRepository() {
        return processVariableDefRepository;
    }
}
