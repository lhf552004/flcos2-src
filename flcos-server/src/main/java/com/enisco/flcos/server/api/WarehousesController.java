package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.warehouse.NewWarehouseDto;
import com.enisco.flcos.server.dto.warehouse.WarehouseDto;
import com.enisco.flcos.server.entities.WarehouseEntity;
import com.enisco.flcos.server.repository.relational.WarehouseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/warehouses")
@RestController
public class WarehousesController extends GenericControllerBase<WarehouseEntity, WarehouseDto, WarehouseDto, NewWarehouseDto> {

    private final WarehouseRepository warehouseRepository;

    public WarehousesController(@Autowired WarehouseRepository warehouseRepository) {
        this.warehouseRepository = warehouseRepository;
    }

    @Override
    JpaRepository<WarehouseEntity, Long> getRepository() {
        return warehouseRepository;
    }
}
