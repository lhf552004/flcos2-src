package com.enisco.flcos.server.api;

import com.enisco.flcos.server.documents.Warehouse;
import com.enisco.flcos.server.repository.mongodb.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RequestMapping("api/v1/warehouses")
@RestController
public class WarehousesController {

    private WarehouseRepository warehouseRepository;

    public WarehousesController(@Autowired WarehouseRepository warehouseRepository) {
        this.warehouseRepository = warehouseRepository;
    }

    @PostMapping
    public void createWarehouse(@RequestBody Warehouse warehouse){
        warehouse.setId(UUID.randomUUID());
        warehouseRepository.insert(warehouse);
    }

    @GetMapping
    public ResponseEntity<?> getWarehouses() {
        return ResponseEntity.ok(warehouseRepository.findAll());
    }

    @GetMapping(path = "{id}")
    public Optional<Warehouse> getWarehouse(@PathVariable UUID id){
        return warehouseRepository.findById(id);
    }

    @PutMapping(path = "{id}")
    public void updateWarehouse(@PathVariable UUID id, @RequestBody Warehouse warehouse){
        warehouseRepository.save(warehouse);
    }

    @DeleteMapping(path = "{id}")
    public void deleteWarehouse(@PathVariable UUID id){
        warehouseRepository.deleteById(id);
    }
}
