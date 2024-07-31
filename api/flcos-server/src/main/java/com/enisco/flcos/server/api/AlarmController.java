package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.alarm.AlarmDto;
import com.enisco.flcos.server.repository.mongodb.AlarmLogRepository;
import com.enisco.flcos.server.repository.relational.AlarmRepository;
import com.enisco.flcos.server.util.RepositoryUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/v1/alarms")
public class AlarmController extends ControllerBase {
    private final AlarmRepository alarmRepository;
    private final AlarmLogRepository alarmLogRepository;

    @Autowired
    public AlarmController(AlarmRepository alarmRepository,
                           AlarmLogRepository alarmLogRepository
    ) {
        this.alarmRepository = alarmRepository;
        this.alarmLogRepository = alarmLogRepository;
    }

    @GetMapping(path = "{id}")
    public AlarmDto getAlarm(@PathVariable Long id) {
        var result = alarmRepository.findById(id);
        return result.map(alarmEntity -> modelMapper.map(alarmEntity, AlarmDto.class)).orElse(null);
    }

    @GetMapping(path = "last")
    public List<AlarmDto> getLastAlarm() {
        var result = alarmRepository.findTopByActive(true);
        return result.stream()
                .map(alarmEntity -> modelMapper.map(alarmEntity, AlarmDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping(path = "active")
    public List<AlarmDto> getActiveAlarms(@RequestParam int page, @RequestParam int size, @RequestParam(required = false, defaultValue = "") String direct, @RequestParam(required = false, defaultValue = "id") String sortProperty) {
        var result = alarmRepository.findByActive(true, getPageable(page, size, direct, sortProperty));
        return result.stream()
                .map(alarmEntity -> modelMapper.map(alarmEntity, AlarmDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping
    public List<AlarmDto> getAlarms(@RequestParam int page, @RequestParam int size, @RequestParam(required = false, defaultValue = "") String direct, @RequestParam(required = false, defaultValue = "id") String sortProperty) {
        return alarmRepository.findAll(getPageable(page, size, direct, sortProperty))
                .toList().stream()
                .map(alarmEntity -> modelMapper.map(alarmEntity, AlarmDto.class))
                .collect(Collectors.toList());
    }

    @PutMapping(path = "/close/{id}")
    public ResponseEntity closeAlarm(@PathVariable Long id) {
        var result = alarmRepository.findById(id);
        if (result.isPresent()) {
            var alarm = result.get();
            alarm.setActive(false);
            RepositoryUtil.update(alarmRepository, alarm);
        }
        return ResponseEntity.ok().build();
    }
}
