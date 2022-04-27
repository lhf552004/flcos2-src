package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.receipt.NewReceiptDto;
import com.enisco.flcos.server.dto.receipt.ReceiptDto;
import com.enisco.flcos.server.entities.ReceiptEntity;
import com.enisco.flcos.server.repository.relational.ReceiptRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/v1/receipts")
@RestController
public class ReceiptController extends GenericControllerBase<ReceiptEntity, ReceiptDto, NewReceiptDto> {

    private final ReceiptRepository receiptRepository;

    public ReceiptController(@Autowired ReceiptRepository receiptRepository) {
        this.receiptRepository = receiptRepository;
    }

    @Override
    JpaRepository<ReceiptEntity, Long> getRepository() {
        return receiptRepository;
    }
}
