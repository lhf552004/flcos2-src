package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.beans.job.IJobManagement;
import com.enisco.flcos.server.beans.job.IntakeJobManagementBean;
import com.enisco.flcos.server.beans.job.ProduceJobManagementBean;
import com.enisco.flcos.server.entities.LineEntity;
import com.enisco.flcos.server.entities.SectionEntity;
import com.enisco.flcos.server.entities.alarm.AlarmEntity;
import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.enums.LineStatus;
import com.enisco.flcos.server.repository.relational.AlarmRepository;
import com.enisco.flcos.server.repository.relational.JobRepository;
import com.enisco.flcos.server.repository.relational.LineRepository;
import com.enisco.flcos.server.repository.relational.SectionRepository;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;

import java.util.*;

@Singleton
@Startup
@Component
public class GcObjectManagement {
    private final Map<Long, LineEntity> lines = new HashMap<>();
    private final Map<Long, SectionEntity> sections = new HashMap<>();

    private final LineRepository lineRepository;

    private final SectionRepository sectionRepository;

    private final JobRepository jobRepository;

    private final AlarmRepository alarmRepository;

    private final IntakeJobManagementBean intakeJobManagementBean;
    private final ProduceJobManagementBean produceJobManagementBean;

    @Autowired
    public GcObjectManagement(LineRepository lineRepository,
                              SectionRepository sectionRepository,
                              JobRepository jobRepository,
                              IntakeJobManagementBean intakeJobManagementBean,
                              ProduceJobManagementBean produceJobManagementBean,
                              AlarmRepository alarmRepository
    ) {
        this.lineRepository = lineRepository;
        this.sectionRepository = sectionRepository;
        this.jobRepository = jobRepository;
        this.intakeJobManagementBean = intakeJobManagementBean;
        this.produceJobManagementBean = produceJobManagementBean;
        this.alarmRepository = alarmRepository;
    }

    @PostConstruct
    public void initialize() {
        lineRepository.findAll().forEach(lineEntity -> lines.put(lineEntity.getId(), lineEntity));
        sectionRepository.findAll().forEach(sectionEntity -> sections.put(sectionEntity.getId(), sectionEntity));
    }

    public void updateLine(LineEntity lineEntity) {
        lines.put(lineEntity.getId(), lineEntity);
    }

    public void deleteLine(Long id) {
        lines.remove(id);
    }

    public void updateSection(SectionEntity sectionEntity) {
        sections.put(sectionEntity.getId(), sectionEntity);
    }

    public void deleteSection(Long id) {
        sections.remove(id);
    }

    public void checkLine(String gcObjectId, Object value) {
        var result = lines.values().stream().filter(lineEntity ->
                lineEntity.getOpcVariableIdent() != null &&
                        gcObjectId.startsWith(lineEntity.getOpcVariableIdent())).findFirst();
        if (result.isPresent()) {
            var line = result.get();
            if (gcObjectId.endsWith("status")) {
                var str = value.toString().split(",");
                if (str.length > 0) {
                    var newStatus = LineStatus.values()[Integer.parseInt(str[0])];
                    if (!line.getStatus().equals(newStatus)) {
                        line.setStatus(newStatus);
                        RepositoryUtil.update(lineRepository, line);
                    }
                }

            }
        }
    }

    public void checkSection(String gcObjectId, Object value) {
        var result = sections.values()
                .stream().filter(sectionEntity ->
                        sectionEntity.getOpcVariableIdent() != null &&
                                gcObjectId.startsWith(sectionEntity.getOpcVariableIdent())).findFirst();
        if (result.isPresent()) {
            var section = result.get();
            IJobManagement jobManagement = section.getLine().isProduction()
                    ? produceJobManagementBean
                    : intakeJobManagementBean;
            if (gcObjectId.endsWith("status")) {
                var job = section.getJob();
                var newStatus = LineStatus.values()[(int) value];
                if (!section.getStatus().equals(newStatus)) {
                    section.setStatus(newStatus);
                    RepositoryUtil.update(sectionRepository, section);
                    if (job != null) {
                        switch (newStatus) {
                            case Error:
                                jobManagement.changeJobStatus(job, JobStatus.Error);
                                break;
                            case Passive:
                                var sections = section.getLine().getSections();
                                var isLast = sections.stream().noneMatch(s -> s.getIndex() > section.getIndex());
                                if(isLast)
                                    jobManagement.changeJobStatus(job, JobStatus.Done);
                                break;
                            case Suspended:
                                jobManagement.changeJobStatus(job, JobStatus.Suspended);
                                break;
                        }
                    }
                }
            } else if (gcObjectId.endsWith("jobId")) {
                if (value == null) {
                    section.setJob(null);
                    RepositoryUtil.update(sectionRepository, section);
                    return;
                }
                var jobId = (Long) value;
                var jobOptional = jobRepository.findById(jobId);
                if (jobOptional.isPresent()) {
                    var job = jobOptional.get();
                    if (section.getJob() != null && !section.getStatus().equals(LineStatus.Passive)) {
                        var alarm = new AlarmEntity();
                        alarm.setActive(true);
                        alarm.setMessage("Section is occupied cannot start new job: " + job.getName());
                        alarmRepository.save(alarm);
                    } else {
                        section.setJob(job);
                        RepositoryUtil.update(sectionRepository, section);
                        if (section.getIndex().equals(0)) {
                            jobManagement.changeJobStatus(job, JobStatus.Running);
                        }
                    }
                }
            }
        }
    }

    public void checkGcObject(String gcObjectId, Object value) {
        checkLine(gcObjectId, value);
        checkSection(gcObjectId, value);
    }
}
