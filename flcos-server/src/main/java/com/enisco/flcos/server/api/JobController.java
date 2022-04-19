package com.enisco.flcos.server.api;

import com.enisco.flcos.server.beans.IJobManagement;
import com.enisco.flcos.server.beans.IntakeJobManagementBean;
import com.enisco.flcos.server.beans.ProduceJobManagementBean;
import com.enisco.flcos.server.dto.JobDto;
import com.enisco.flcos.server.dto.NewJobDto;
import com.enisco.flcos.server.dto.NewReceiptDto;
import com.enisco.flcos.server.entities.job.JobEntity;
import com.enisco.flcos.server.repository.relational.JobRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/v1/jobs")
public class JobController extends ControllerBase {
    private JobRepository jobRepository;
    private IntakeJobManagementBean intakeJobManagementBean;
    private ProduceJobManagementBean produceJobManagementBean;

    @Autowired
    public JobController(JobRepository jobRepository,
                         IntakeJobManagementBean intakeJobManagementBean,
                         ProduceJobManagementBean produceJobManagementBean
    ) {
        this.jobRepository = jobRepository;
        this.intakeJobManagementBean = intakeJobManagementBean;
        this.produceJobManagementBean = produceJobManagementBean;
    }

    @GetMapping(path = "{id}")
    public JobDto get(@PathVariable Long id) {
        var result = jobRepository.findById(id);
        return result.map(jobEntity -> modelMapper.map(jobEntity, JobDto.class)).orElse(null);
    }

    @PostMapping
    public ResponseEntity<Long> create(@RequestBody NewJobDto newJobDto) {
        var jobEntity = modelMapper.map(newJobDto, JobEntity.class);
        jobRepository.save(jobEntity);
        if (jobEntity.getName() == null || jobEntity.getName().isEmpty()) {
            jobEntity.setName(jobEntity.getLine().getName() + ":" + jobEntity.getId());
        }
        return ResponseEntity.ok(jobEntity.getId());
    }

    @GetMapping
    public List<JobDto> getJobs(@RequestParam int page, @RequestParam int size, @RequestParam(required = false, defaultValue = "") String direct, @RequestParam(required = false, defaultValue = "id") String sortProperty) {
        return jobRepository.findAll(getPageable(page, size, direct, sortProperty))
                .toList().stream()
                .map(jobEntity -> modelMapper.map(jobEntity, JobDto.class))
                .collect(Collectors.toList());
    }

    @PutMapping(path = "/start/{id}")
    public ResponseEntity startJob(@PathVariable Long id) {
        var result = jobRepository.findById(id);
        if (result.isPresent()) {
            var job = result.get();
            IJobManagement jobManagement = job.getLine().isProduction()
                    ? produceJobManagementBean
                    : intakeJobManagementBean;
            var errors = jobManagement.checkJob(job);
            if (!errors.isEmpty()) {
                return ResponseEntity.of(Optional.of(errors));
            } else {
                jobManagement.startJob(job);
            }
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
