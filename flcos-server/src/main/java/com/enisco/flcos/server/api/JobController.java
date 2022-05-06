package com.enisco.flcos.server.api;

import com.enisco.flcos.server.beans.IJobManagement;
import com.enisco.flcos.server.beans.IntakeJobManagementBean;
import com.enisco.flcos.server.beans.ProduceJobManagementBean;
import com.enisco.flcos.server.dto.job.JobDto;
import com.enisco.flcos.server.dto.job.MessageDto;
import com.enisco.flcos.server.dto.job.NewJobDto;
import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.job.JobEntity;
import com.enisco.flcos.server.repository.relational.JobRepository;
import com.enisco.flcos.server.repository.relational.LineRepository;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/v1/jobs")
public class JobController extends GenericControllerBase<JobEntity, JobDto, NewJobDto> {
    private final JobRepository jobRepository;
    private final LineRepository lineRepository;
    private final IntakeJobManagementBean intakeJobManagementBean;
    private final ProduceJobManagementBean produceJobManagementBean;

    @Autowired
    public JobController(JobRepository jobRepository,
                         LineRepository lineRepository,
                         IntakeJobManagementBean intakeJobManagementBean,
                         ProduceJobManagementBean produceJobManagementBean
    ) {
        this.jobRepository = jobRepository;
        this.lineRepository = lineRepository;
        this.intakeJobManagementBean = intakeJobManagementBean;
        this.produceJobManagementBean = produceJobManagementBean;
    }

    @Override
    JpaRepository<JobEntity, Long> getRepository() {
        return jobRepository;
    }

    @GetMapping(path = "/line/{lineId}")
    public ResponseEntity<List<JobDto>> getAllByLine(@PathVariable Long lineId, @RequestParam(required = false, defaultValue = "0") int page, @RequestParam(required = false, defaultValue = "30") int size, @RequestParam(required = false, defaultValue = "") String direct, @RequestParam(required = false, defaultValue = "id") String sortProperty) {
        var lineOptional = lineRepository.findById(lineId);
        if (lineOptional.isPresent()) {
            var line = lineOptional.get();
            return ResponseEntity.ok(jobRepository.findByLine(line, getPageable(page, size, direct, sortProperty))
                    .stream()
                    .map(entity -> modelMapper.map(entity, getDtoClass()))
                    .collect(Collectors.toList()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(path = "/{id}/scan/{batchNumber}")
    public ResponseEntity<MessageDto> scanBatchNumber(@PathVariable Long id, @PathVariable String batchNumber) {
        var jobOptional = jobRepository.findById(id);
        if (jobOptional.isPresent()) {
            var job = jobOptional.get();
            if (job.getLine() != null && !job.getLine().isProduction()) {
                var message = intakeJobManagementBean.intake(job, batchNumber);
                return ResponseEntity.ok(message);
            } else {
                var message = new MessageDto();
                var errors = new ArrayList<String>();
                errors.add("Line is production line or line is not set");
                message.setErrors(errors);
                ResponseEntity.ok(message);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @Override
    @PostMapping
    public ResponseEntity<Long> create(@RequestBody NewJobDto newJobDto) {
        var lineOptional = lineRepository.findById(newJobDto.getLine().getId());
        if (lineOptional.isPresent()) {
            IJobManagement jobManagement = lineOptional.get().isProduction()
                    ? produceJobManagementBean
                    : intakeJobManagementBean;
            var jobEntity = jobManagement.createJob(newJobDto);
            return ResponseEntity.ok(jobEntity.getId());
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping(path = "/start/{id}")
    public ResponseEntity<MessageDto> startJob(@PathVariable Long id) {
        var result = jobRepository.findById(id);
        if (result.isPresent()) {
            var job = result.get();
            IJobManagement jobManagement = job.getLine().isProduction()
                    ? produceJobManagementBean
                    : intakeJobManagementBean;
            var messageDto = jobManagement.startJob(job);
            return ResponseEntity.ok(messageDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
