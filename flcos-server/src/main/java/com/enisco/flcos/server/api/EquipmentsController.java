package com.enisco.flcos.server.api;

import com.enisco.flcos.server.documents.Equipment;
import com.enisco.flcos.server.repository.mongodb.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RequestMapping("api/v1/equipments")
@RestController
public class EquipmentsController {

    private EquipmentRepository equipmentRepository;

    public EquipmentsController(@Autowired EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }

    @PostMapping
    public void createEquipment(@RequestBody Equipment equipment){
        equipment.setId(UUID.randomUUID());
        equipmentRepository.insert(equipment);
    }

    @GetMapping
    public ResponseEntity<?> getEquipments() {
        return ResponseEntity.ok(equipmentRepository.findAll());
    }

    @GetMapping(path = "{id}")
    public Optional<Equipment> getEquipment(@PathVariable UUID id){
        return equipmentRepository.findById(id);
    }

    @PutMapping(path = "{id}")
    public void updateEquipment(@PathVariable UUID id, @RequestBody Equipment equipment){
        equipmentRepository.save(equipment);
    }

    @DeleteMapping(path = "{id}")
    public void deleteEquipment(@PathVariable UUID id){
        equipmentRepository.deleteById(id);
    }
}
