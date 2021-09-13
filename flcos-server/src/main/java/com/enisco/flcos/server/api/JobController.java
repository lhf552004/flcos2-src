package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.JobDto;
import com.enisco.flcos.server.repository.postgresql.JobRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/jobs")
public class JobController extends ControllerBase {
    private JobRepository jobRepository;
    private ModelMapper modelMapper = new ModelMapper();

    public JobController(@Autowired JobRepository jobRepository) {
        this.jobRepository = jobRepository;
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

    @GetMapping(path = "/start/{id}")
    public void startJob() {

    }

    @GetMapping
    public void checkJob() {

    }
}
