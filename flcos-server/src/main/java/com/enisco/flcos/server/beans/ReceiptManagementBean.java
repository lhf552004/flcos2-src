package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.api.ControllerBase;
import com.enisco.flcos.server.entities.LogisticUnitEntity;
import com.enisco.flcos.server.entities.ReceiptEntity;
import com.enisco.flcos.server.repository.mongodb.ReceiptLogRepository;
import com.enisco.flcos.server.repository.postgresql.LogisticUnitRepository;
import com.enisco.flcos.server.repository.postgresql.ReceiptRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReceiptManagementBean {
    Logger logger = LoggerFactory.getLogger(ReceiptManagementBean.class);

    private ReceiptRepository receiptRepository;
    private ReceiptLogRepository receiptLogRepository;
    private LogisticUnitRepository logisticUnitRepository;

    @Autowired
    public ReceiptManagementBean(ReceiptRepository receiptRepository, ReceiptLogRepository receiptLogRepository, LogisticUnitRepository logisticUnitRepository) {
        this.receiptRepository = receiptRepository;
        this.receiptLogRepository = receiptLogRepository;
        this.logisticUnitRepository = logisticUnitRepository;
    }

    public void finishReceipt(ReceiptEntity receiptEntity) {
        try {
            var newLogisticUnit = new LogisticUnitEntity();
            newLogisticUnit.setBatchNumber(receiptEntity.getBatchNumber());
            newLogisticUnit.setUnitType(receiptEntity.getUnitType());
            newLogisticUnit.setActualWeight(receiptEntity.getQuantity() * receiptEntity.getUnit());
            newLogisticUnit.setUnit(receiptEntity.getUnit());
            newLogisticUnit.setLocation("Warehouse");
            newLogisticUnit.setProduct(receiptEntity.getProduct());
            newLogisticUnit.setSupplier(receiptEntity.getSupplier());
            ControllerBase.assignCreator(newLogisticUnit);
            logisticUnitRepository.save(newLogisticUnit);
            receiptRepository.delete(receiptEntity);
        }catch (Exception ex) {
            logger.error("finishReceipt", ex.getMessage());
        }

    }
}
