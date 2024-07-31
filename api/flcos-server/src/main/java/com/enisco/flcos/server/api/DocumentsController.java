package com.enisco.flcos.server.api;

import com.enisco.flcos.server.documents.CspsDocument;
import com.enisco.flcos.server.repository.mongodb.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RequestMapping("api/v1/documents")
@RestController
public class DocumentsController {

    private DocumentRepository documentRepository;

    public DocumentsController(@Autowired DocumentRepository documentRepository) {
        this.documentRepository = documentRepository;
    }

    @PostMapping
    public void createDocument(@RequestBody CspsDocument document){
        document.setId(UUID.randomUUID());
        documentRepository.insert(document);
    }

    @GetMapping
    public ResponseEntity<?> getDocuments() {
        return ResponseEntity.ok(documentRepository.findAll());
    }

    @GetMapping(path = "{id}")
    public Optional<CspsDocument> getDocument(@PathVariable UUID id){
        return documentRepository.findById(id);
    }

    @PutMapping(path = "{id}")
    public void updateDocument(@PathVariable UUID id, @RequestBody CspsDocument document){
        documentRepository.save(document);
    }

    @DeleteMapping(path = "{id}")
    public void deleteDocument(@PathVariable UUID id){
        documentRepository.deleteById(id);
    }
}
