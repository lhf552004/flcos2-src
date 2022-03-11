package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.JobDto;
import com.enisco.flcos.server.repository.relational.JobRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/v1/jobs")
public class JobController extends ControllerBase {
    private JobRepository jobRepository;
    private ModelMapper modelMapper;
    @Autowired
    public JobController(JobRepository jobRepository, ModelMapper modelMapper) {
        this.jobRepository = jobRepository;
        this.modelMapper = modelMapper;
    }

    @GetMapping(path = "{id}")
    public JobDto getJob(@PathVariable Long id) {
        var result = jobRepository.findById(id);
        return result.map(jobEntity -> modelMapper.map(jobEntity, JobDto.class)).orElse(null);
    }

    @GetMapping
    public List<JobDto> getJobs(@RequestParam int page, @RequestParam int size, @RequestParam(required = false, defaultValue = "") String direct, @RequestParam(required = false, defaultValue = "id") String sortProperty) {
        return jobRepository.findAll(getPageable(page, size, direct, sortProperty))
                .toList().stream()
                .map(jobEntity -> modelMapper.map(jobEntity, JobDto.class))
                .collect(Collectors.toList());
    }

    @PutMapping(path = "/start/{id}")
    public void startJob() {

    }
}
