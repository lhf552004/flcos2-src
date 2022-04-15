package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.dto.opcs.OPCVariableChangedDTO;
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

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Singleton
@Startup
@Component
public class GcObjectManagement {
    private Set<String> lineGcObjectIds;
    private Set<LineEntity> lines;
    private Set<String> sectionGcObjectIds;
    private Set<SectionEntity> sections;

    private LineRepository lineRepository;

    private SectionRepository sectionRepository;

    private JobRepository jobRepository;

    private AlarmRepository alarmRepository;

    private IntakeJobManagementBean intakeJobManagementBean;
    private ProduceJobManagementBean produceJobManagementBean;

    @Autowired
    public GcObjectManagement(LineRepository lineRepository,
                              SectionRepository sectionRepository,
                              IntakeJobManagementBean intakeJobManagementBean,
                              ProduceJobManagementBean produceJobManagementBean,
                              AlarmRepository alarmRepository
    ) {
        this.lineRepository = lineRepository;
        this.sectionRepository = sectionRepository;
        this.intakeJobManagementBean = intakeJobManagementBean;
        this.produceJobManagementBean = produceJobManagementBean;
        this.alarmRepository = alarmRepository;
    }

    @PostConstruct
    public void initialize() {
        lineGcObjectIds = lineRepository.findAll().stream().map(lineEntity -> {
            var lineGcObjectId = lineEntity.getOpcVariableIdent();
            List<String> lineGcObjects = new ArrayList<String>();
            if (!lineGcObjectId.endsWith("/")) {
                lineGcObjectId += "/";
            }
            lineGcObjects.add(lineGcObjectId + "status");
            lines.add(lineEntity);
            return lineGcObjects;
        }).flatMap(Collection::stream)
                .collect(Collectors.toSet());
        sectionGcObjectIds = sectionRepository.findAll().stream().map(sectionEntity -> {
            var sectionObjectId = sectionEntity.getOpcVariableIdent();
            List<String> sectionObjects = new ArrayList<String>();
            if (!sectionObjectId.endsWith("/")) {
                sectionObjectId += "/";
            }
            sectionObjects.add(sectionObjectId + "status");
            sectionObjects.add(sectionObjectId + "jobId");
            sections.add(sectionEntity);
            return sectionObjects;
        }).flatMap(Collection::stream)
                .collect(Collectors.toSet());
    }

    public Set<String> getLineGcObjectIds() {
        return lineGcObjectIds;
    }

    public Set<String> getSectionGcObjectIds() {
        return sectionGcObjectIds;
    }

    public void updateLine(String gcObjectId, Object value) {
        var result = lines.stream().filter(lineEntity -> gcObjectId.startsWith(lineEntity.getOpcVariableIdent())).findFirst();
        if (result.isPresent()) {
            var line = result.get();
            if (gcObjectId.endsWith("status")) {
                var newStatus = LineStatus.values()[(int) value];
                if (!line.getStatus().equals(newStatus)) {
                    line.setStatus(newStatus);
                    RepositoryUtil.update(lineRepository, line);
                }
            }
        }
    }

    public void updateSection(String gcObjectId, Object value) {
        var result = sections.stream().filter(sectionEntity -> gcObjectId.startsWith(sectionEntity.getOpcVariableIdent())).findFirst();
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
                        if (newStatus.equals(LineStatus.Error)) {
                            jobManagement.changeJobStatus(job, JobStatus.Error);
                        } else if (newStatus.equals(LineStatus.Suspended)) {
                            jobManagement.changeJobStatus(job, JobStatus.Suspended);
                        }
                    }
                }
            } else if (gcObjectId.endsWith("jobId")) {
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
                        if(section.getIndex().equals(0)) {
                            jobManagement.changeJobStatus(job, JobStatus.Running);
                        }
                    }
                }
            }
        }
    }

    public void checkGcObject(String gcObjectId, Object value) {
        if(lineGcObjectIds.contains(gcObjectId)) {
            updateLine(gcObjectId, value);
        }else if(sectionGcObjectIds.contains(gcObjectId)) {
            updateSection(gcObjectId, value);
        }
    }
}
