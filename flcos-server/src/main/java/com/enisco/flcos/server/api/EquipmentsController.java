package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.equipment.EquipmentDto;
import com.enisco.flcos.server.dto.equipment.NewEquipmentDto;
import com.enisco.flcos.server.entities.EquipmentEntity;
import com.enisco.flcos.server.repository.relational.EquipmentRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/equipments")
@RestController
public class EquipmentsController extends GenericControllerBase<EquipmentEntity, EquipmentDto, NewEquipmentDto> {

    private final EquipmentRepository equipmentRepository;

    public EquipmentsController(@Autowired EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }

    @Override
    JpaRepository<EquipmentEntity, Long> getRepository() {
        return equipmentRepository;
    }
}
