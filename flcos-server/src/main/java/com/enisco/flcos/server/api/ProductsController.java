package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.ProductDTO;
import com.enisco.flcos.server.entities.ProductEntity;
import com.enisco.flcos.server.repository.relational.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/products")
@RestController
public class ProductsController {

    private ProductRepository productRepository;
    @Autowired
    private ModelMapper modelMapper;

    public ProductsController(@Autowired ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @PostMapping
    public void createProduct(@RequestBody ProductDTO productDto){
        var productEntity = modelMapper.map(productDto, ProductEntity.class);
        productRepository.save(productEntity);
    }

    @GetMapping
    public ResponseEntity<?> getProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }

    @GetMapping(path = "{id}")
    public ProductDTO getProduct(@PathVariable Long id){
        var result = productRepository.findById(id);
        return result.map(productEntity -> modelMapper.map(productEntity, ProductDTO.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public void updateProduct(@PathVariable Long id, @RequestBody ProductDTO productDto){
        var productEntity = modelMapper.map(productDto, ProductEntity.class);
        productRepository.save(productEntity);
    }

    @DeleteMapping(path = "{id}")
    public void deleteProduct(@PathVariable Long id){
        productRepository.deleteById(id);
    }
}
