package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.receipt.NewReceiptDto;
import com.enisco.flcos.server.dto.receipt.ReceiptDto;
import com.enisco.flcos.server.entities.LogisticUnitEntity;
import com.enisco.flcos.server.entities.ReceiptEntity;
import com.enisco.flcos.server.entities.WarehouseEntity;
import com.enisco.flcos.server.entities.enums.PackageType;
import com.enisco.flcos.server.repository.relational.LogisticUnitRepository;
import com.enisco.flcos.server.repository.relational.ReceiptRepository;

import com.enisco.flcos.server.repository.relational.WarehouseRepository;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("api/v1/receipts")
@RestController
public class ReceiptController extends GenericControllerBase<ReceiptEntity, ReceiptDto, ReceiptDto, NewReceiptDto> {
    Logger logger = LoggerFactory.getLogger(ReceiptController.class);

    private final ReceiptRepository receiptRepository;
    private final LogisticUnitRepository logisticUnitRepository;
    private final WarehouseRepository warehouseRepository;

    @Value("${warehouse.raw}")
    private String rawWarehouseName;

    @Autowired
    public ReceiptController(ReceiptRepository receiptRepository,
                             LogisticUnitRepository logisticUnitRepository,
                             WarehouseRepository warehouseRepository
    ) {
        this.receiptRepository = receiptRepository;
        this.logisticUnitRepository = logisticUnitRepository;
        this.warehouseRepository = warehouseRepository;
    }

    @Override
    JpaRepository<ReceiptEntity, Long> getRepository() {
        return receiptRepository;
    }

    @GetMapping(path = "/{id}/confirm")
    public ResponseEntity<?> confirm(@PathVariable Long id) {
        var result = getRepository().findById(id);
        if (result.isPresent()) {
            var receipt = result.get();
            var errors = checkReceipt(receipt);
            if (!errors.isEmpty()) {
                return ResponseEntity.ok(errors);
            }
            var rawWarehouseOptional = warehouseRepository.findByName(rawWarehouseName);
            if (rawWarehouseOptional.isPresent()) {
                var rawWarehouse = rawWarehouseOptional.get();
                var quantity = receipt.getQuantity();
                if (receipt.getPackageType().equals(PackageType.Pallet)) {
                    var weight = receipt.getPerWeight() * receipt.getQuantity();
                    createLogisticUnit(receipt, receipt.getBatchNumber(), weight, rawWarehouse);
                } else {
                    for (var i = 0; i < quantity; i++) {
                        var weight = receipt.getPerWeight();
                        var batchNumber = receipt.getBatchNumber() + "-" + (i + 1);
                        createLogisticUnit(receipt, batchNumber, weight, rawWarehouse);
                    }
                }
                logger.info("Receipt is imported into warehouse.");
                receiptRepository.delete(receipt);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    private List<String> checkReceipt(ReceiptEntity receipt) {
        List<String> errors = new ArrayList<>();
        if (receipt.getQuantity() <= 0) {
            errors.add("Quantity should not be zero");
        }
        if (receipt.getPackageType() == null) {
            errors.add("Package type is not set.");
        }
        if (receipt.getBatchNumber() == null || receipt.getBatchNumber().isEmpty()) {
            errors.add("Batch number is not set.");
        }
        if (receipt.getPerWeight() <= 0) {
            errors.add("Per weight is not set.");
        }
        if (receipt.getUnitType() == null) {
            errors.add("Unit type is not set.");
        }
        if (receipt.getProduct() == null) {
            errors.add("Product is not set.");
        }
        if (receipt.getSupplier() == null) {
            errors.add("Supplier is not set.");
        }
        return errors;
    }

    private void createLogisticUnit(ReceiptEntity receipt, String batchNumber, double weight, WarehouseEntity rawWarehouse) {
        var logisticUnit = new LogisticUnitEntity();
        logisticUnit.setTargetWeight(weight);
        logisticUnit.setActualWeight(weight);
        logisticUnit.setUnitType(receipt.getUnitType());
        logisticUnit.setBatchNumber(batchNumber);
        logisticUnit.setProduct(receipt.getProduct().getName());
        logisticUnit.setSupplier(receipt.getSupplier().getName());
        logisticUnit.setPackageType(receipt.getPackageType());
        logisticUnit.setWarehouse(rawWarehouse);
        RepositoryUtil.create(logisticUnitRepository, logisticUnit);
    }
}
