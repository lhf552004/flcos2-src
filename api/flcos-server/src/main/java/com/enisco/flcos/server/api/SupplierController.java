package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.supplier.NewSupplierDto;
import com.enisco.flcos.server.dto.supplier.SupplierDto;
import com.enisco.flcos.server.entities.SupplierEntity;
import com.enisco.flcos.server.repository.relational.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/suppliers")
@RestController
public class SupplierController extends GenericControllerBase<SupplierEntity, SupplierDto, SupplierDto, NewSupplierDto> {
    private final SupplierRepository supplierRepository;


    public SupplierController(@Autowired SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    @Override
    JpaRepository<SupplierEntity, Long> getRepository() {
        return supplierRepository;
    }

}
