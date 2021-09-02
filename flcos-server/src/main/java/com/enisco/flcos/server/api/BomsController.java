package com.enisco.flcos.server.api;

import com.enisco.flcos.server.documents.Bom;
import com.enisco.flcos.server.repository.mongodb.BomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RequestMapping("api/v1/boms")
@RestController
public class BomsController {

    private BomRepository bomRepository;

    public BomsController(@Autowired BomRepository bomRepository) {
        this.bomRepository = bomRepository;
    }

    @PostMapping
    public void createBom(@RequestBody Bom bom){
        bom.setId(UUID.randomUUID());
        bomRepository.insert(bom);
    }

    @GetMapping
    public ResponseEntity<?> getBoms() {
        return ResponseEntity.ok(bomRepository.findAll());
    }

    @GetMapping(path = "{id}")
    public Optional<Bom> getBom(@PathVariable UUID id){
        return bomRepository.findById(id);
    }

    @PutMapping(path = "{id}")
    public void updateBom(@PathVariable UUID id, @RequestBody Bom bom){ bomRepository.save(bom); }

    @DeleteMapping(path = "{id}")
    public void deleteBom(@PathVariable UUID id){
        bomRepository.deleteById(id);
    }
}
