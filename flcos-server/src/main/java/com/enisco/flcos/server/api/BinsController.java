package com.enisco.flcos.server.api;

import com.enisco.flcos.server.documents.Bin;
import com.enisco.flcos.server.repository.mongodb.BinRepository;
import com.enisco.flcos.server.documents.Bin;
import com.enisco.flcos.server.repository.mongodb.BinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RequestMapping("api/v1/bins")
@RestController
public class BinsController {

    private BinRepository binRepository;

    public BinsController(@Autowired BinRepository binRepository) {
        this.binRepository = binRepository;
    }

    @PostMapping
    public void createBin(@RequestBody Bin bin){
        bin.setId(UUID.randomUUID());
        binRepository.insert(bin);
    }

    @GetMapping
    public ResponseEntity<?> getBins() {
        return ResponseEntity.ok(binRepository.findAll());
    }

    @GetMapping(path = "{id}")
    public Optional<Bin> getBin(@PathVariable UUID id){
        return binRepository.findById(id);
    }

    @PutMapping(path = "{id}")
    public void updateBin(@PathVariable UUID id, @RequestBody Bin bin){
        binRepository.save(bin);
    }

    @DeleteMapping(path = "{id}")
    public void deleteBin(@PathVariable UUID id){
        binRepository.deleteById(id);
    }
}
