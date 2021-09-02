package com.enisco.flcos.server.api;

import com.enisco.flcos.server.documents.Product;
import com.enisco.flcos.server.repository.mongodb.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RequestMapping("api/v1/products")
@RestController
public class ProductsController {

    private ProductRepository productRepository;

    public ProductsController(@Autowired ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @PostMapping
    public void createProduct(@RequestBody Product product){
        product.setId(UUID.randomUUID());
        productRepository.insert(product);
    }

    @GetMapping
    public ResponseEntity<?> getProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }

    @GetMapping(path = "{id}")
    public Optional<Product> getProduct(@PathVariable UUID id){
        return productRepository.findById(id);
    }

    @PutMapping(path = "{id}")
    public void updateProduct(@PathVariable UUID id, @RequestBody Product product){
        productRepository.save(product);
    }

    @DeleteMapping(path = "{id}")
    public void deleteProduct(@PathVariable UUID id){
        productRepository.deleteById(id);
    }
}
