package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.EquipmentDTO;
import com.enisco.flcos.server.entities.EquipmentEntity;
import com.enisco.flcos.server.repository.relational.EquipmentRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/equipments")
@RestController
public class EquipmentsController {

    private EquipmentRepository equipmentRepository;
    @Autowired
    private ModelMapper modelMapper;

    public EquipmentsController(@Autowired EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }

    @PostMapping
    public void createEquipment(@RequestBody EquipmentDTO equipmentDto){
        var equipmentEntity = modelMapper.map(equipmentDto, EquipmentEntity.class);
        equipmentRepository.save(equipmentEntity);
    }

    @GetMapping
    public ResponseEntity<?> getEquipments() {
        return ResponseEntity.ok(equipmentRepository.findAll());
    }

    @GetMapping(path = "{id}")
    public EquipmentDTO getEquipment(@PathVariable Long id){
        var result = equipmentRepository.findById(id);
        return result.map(equipmentEntity -> modelMapper.map(equipmentEntity, EquipmentDTO.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public void updateEquipment(@PathVariable Long id, @RequestBody EquipmentDTO equipmentDto){
        var equipmentEntity = modelMapper.map(equipmentDto, EquipmentEntity.class);
        equipmentRepository.save(equipmentEntity);
    }

    @DeleteMapping(path = "{id}")
    public void deleteEquipment(@PathVariable Long id){
        equipmentRepository.deleteById(id);
    }
}
