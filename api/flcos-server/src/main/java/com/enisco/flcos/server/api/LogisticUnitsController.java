package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.logisticunits.LogisticUnitDto;
import com.enisco.flcos.server.repository.relational.LogisticUnitRepository;
import com.enisco.flcos.server.repository.relational.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/logistic-units")
@RestController
public class LogisticUnitsController extends ControllerBase {

    private final LogisticUnitRepository logisticUnitRepository;
    private final WarehouseRepository warehouseRepository;

    @Autowired
    public LogisticUnitsController(
            LogisticUnitRepository logisticUnitRepository,
            WarehouseRepository warehouseRepository
    ) {
        this.logisticUnitRepository = logisticUnitRepository;
        this.warehouseRepository = warehouseRepository;
    }

    @GetMapping(path = "wh/{whId}")
    public ResponseEntity<List<LogisticUnitDto>> getAll(@PathVariable Long whId, @RequestParam(required = false, defaultValue = "0") int page, @RequestParam(required = false, defaultValue = "30") int size, @RequestParam(required = false, defaultValue = "") String direct, @RequestParam(required = false, defaultValue = "id") String sortProperty) {
        var warehouseOptional = warehouseRepository.findById(whId);
        return warehouseOptional.map(warehouseEntity -> ResponseEntity.ok(logisticUnitRepository.findByWarehouse(warehouseEntity, getPageable(page, size, direct, sortProperty))
                .stream()
                .map(entity -> modelMapper.map(entity, LogisticUnitDto.class))
                .collect(Collectors.toList()))).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
