package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.WarehouseDto;
import com.enisco.flcos.server.entities.WarehouseEntity;
import com.enisco.flcos.server.repository.relational.WarehouseRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/warehouses")
@RestController
public class WarehousesController {
    @Autowired
    private ModelMapper modelMapper;
    private WarehouseRepository warehouseRepository;

    public WarehousesController(@Autowired WarehouseRepository warehouseRepository) {
        this.warehouseRepository = warehouseRepository;
    }

    @PostMapping
    public void createWarehouse(@RequestBody WarehouseDto warehouseDto){
        var warehouseEntity = modelMapper.map(warehouseDto, WarehouseEntity.class);
        warehouseRepository.save(warehouseEntity);
    }

    @GetMapping
    public ResponseEntity<?> getWarehouses() {
        return ResponseEntity.ok(warehouseRepository.findAll());
    }

    @GetMapping(path = "{id}")
    public WarehouseDto getWarehouse(@PathVariable Long id){
        var result = warehouseRepository.findById(id);
        return result.map(warehouseEntity -> modelMapper.map(warehouseEntity, WarehouseDto.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public void updateWarehouse(@PathVariable Long id, @RequestBody WarehouseDto warehouseDto){
        var warehouseEntity = modelMapper.map(warehouseDto, WarehouseEntity.class);
        warehouseRepository.save(warehouseEntity);
    }

    @DeleteMapping(path = "{id}")
    public void deleteWarehouse(@PathVariable Long id){
        warehouseRepository.deleteById(id);
    }
}
