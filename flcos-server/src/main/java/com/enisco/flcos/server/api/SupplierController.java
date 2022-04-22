package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.NewSupplierDto;
import com.enisco.flcos.server.dto.supplier.SupplierDto;
import com.enisco.flcos.server.entities.SupplierEntity;
import com.enisco.flcos.server.repository.relational.SupplierRepository;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/suppliers")
public class SupplierController extends ControllerBase {
    private SupplierRepository supplierRepository;


    public SupplierController(@Autowired SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    @GetMapping(path = "{id}")
    public SupplierDto getSupplier(@PathVariable Long id) {
        var result = supplierRepository.findById(id);
        return result.map(supplierEntity -> modelMapper.map(supplierEntity, SupplierDto.class)).orElse(null);
    }

    @GetMapping
    public List<SupplierDto> getSuppliers(@RequestParam int page, @RequestParam int size, @RequestParam(required = false, defaultValue = "") String direct, @RequestParam(required = false, defaultValue = "id") String sortProperty) {
        return supplierRepository.findAll(getPageable(page, size, direct, sortProperty))
                .toList().stream()
                .map(supplierEntity -> modelMapper.map(supplierEntity, SupplierDto.class))
                .collect(Collectors.toList());
    }

    @PostMapping
    public void createSupplier(@RequestBody NewSupplierDto newSupplierDto) {
        var supplierEntity = modelMapper.map(newSupplierDto, SupplierEntity.class);
        RepositoryUtil.create(supplierRepository, supplierEntity);
    }

    @PutMapping(path = "id")
    public void updateSupplier(@PathVariable Long id, @RequestBody SupplierDto supplierDto) {
        var existed = supplierRepository.findById(id);
        if(existed.isPresent()) {
            var supplierEntity = modelMapper.map(supplierDto, SupplierEntity.class);
            RepositoryUtil.update(supplierRepository, supplierEntity);
        }
    }

}
