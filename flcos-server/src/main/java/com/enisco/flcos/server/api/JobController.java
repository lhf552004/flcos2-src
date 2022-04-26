package com.enisco.flcos.server.api;

import com.enisco.flcos.server.beans.IJobManagement;
import com.enisco.flcos.server.beans.IntakeJobManagementBean;
import com.enisco.flcos.server.beans.ProduceJobManagementBean;
import com.enisco.flcos.server.dto.job.JobDto;
import com.enisco.flcos.server.dto.job.NewJobDto;
import com.enisco.flcos.server.entities.job.JobEntity;
import com.enisco.flcos.server.repository.relational.JobRepository;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/jobs")
public class JobController extends GenericControllerBase<JobEntity, JobDto, NewJobDto> {
    private final JobRepository jobRepository;
    private final IntakeJobManagementBean intakeJobManagementBean;
    private final ProduceJobManagementBean produceJobManagementBean;

    @Autowired
    public JobController(JobRepository jobRepository,
                         IntakeJobManagementBean intakeJobManagementBean,
                         ProduceJobManagementBean produceJobManagementBean
    ) {
        this.jobRepository = jobRepository;
        this.intakeJobManagementBean = intakeJobManagementBean;
        this.produceJobManagementBean = produceJobManagementBean;
    }

    @Override
    JpaRepository<JobEntity, Long> getRepository() {
        return jobRepository;
    }

    @Override
    @PostMapping
    public ResponseEntity<Long> create(@RequestBody NewJobDto newJobDto) {
        var jobEntity = modelMapper.map(newJobDto, JobEntity.class);
        RepositoryUtil.create(getRepository(), jobEntity);
        if (jobEntity.getName() == null || jobEntity.getName().isEmpty()) {
            jobEntity.setName(jobEntity.getLine().getName() + ":" + jobEntity.getId());
        }
        RepositoryUtil.update(getRepository(), jobEntity);
        return ResponseEntity.ok(jobEntity.getId());
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
