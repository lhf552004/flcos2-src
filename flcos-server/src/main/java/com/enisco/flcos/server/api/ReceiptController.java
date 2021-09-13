package com.enisco.flcos.server.api;

import com.enisco.flcos.server.beans.ReceiptManagementBean;
import com.enisco.flcos.server.dto.JobDto;
import com.enisco.flcos.server.dto.NewReceiptDto;
import com.enisco.flcos.server.dto.ReceiptDto;
import com.enisco.flcos.server.entities.ReceiptEntity;
import com.enisco.flcos.server.repository.postgresql.JobRepository;
import com.enisco.flcos.server.repository.postgresql.ReceiptRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.core.Response;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/receipts")
public class ReceiptController extends ControllerBase {
    private ReceiptRepository receiptRepository;

    private ReceiptManagementBean receiptManagementBean;

    @Autowired
    public ReceiptController(ReceiptRepository receiptRepository, ReceiptManagementBean receiptManagementBean) {
        this.receiptRepository = receiptRepository;
        this.receiptManagementBean = receiptManagementBean;
    }

    @GetMapping(path = "{id}")
    public ReceiptDto getReceipt(@PathVariable Long id) {
        var result = receiptRepository.findById(id);
        return result.map(receiptEntity -> modelMapper.map(receiptEntity, ReceiptDto.class)).orElse(null);
    }

    @GetMapping
    public List<ReceiptDto> getReceipts(@RequestParam int page, @RequestParam int size, @RequestParam(required = false, defaultValue = "") String direct, @RequestParam(required = false, defaultValue = "id") String sortProperty) {
        return receiptRepository.findAll(getPageable(page, size, direct, sortProperty))
                .toList().stream()
                .map(receiptEntity -> modelMapper.map(receiptEntity, ReceiptDto.class))
                .collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity createReceipt(@RequestBody NewReceiptDto newReceiptDto) {
        var receipt = modelMapper.map(newReceiptDto, ReceiptEntity.class);
        assignCreator(receipt);
        receiptRepository.save(receipt);
        return ResponseEntity.ok().build();
    }

    @PutMapping(path = "id")
    public ResponseEntity updateReceipt(@PathVariable Long id, @RequestBody ReceiptDto receiptDto) {
        var existed = receiptRepository.findById(id);
        if(existed.isPresent()) {
            var receipt = modelMapper.map(receiptDto, ReceiptEntity.class);
            assignModifiedBy(receipt);
            receiptRepository.save(receipt);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity deleteUser(@PathVariable Long id) {
        if(receiptRepository.existsById(id)) {
            receiptRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping(path = "finish/{id}")
    public ResponseEntity finishReceipt(@PathVariable Long id) {
        var existed = receiptRepository.findById(id);
        if(existed.isPresent()) {
            receiptManagementBean.finishReceipt(existed.get());
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

}
