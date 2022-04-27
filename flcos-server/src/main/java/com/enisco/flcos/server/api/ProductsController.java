package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.product.NewProductDTO;
import com.enisco.flcos.server.dto.product.ProductDTO;
import com.enisco.flcos.server.dto.product.SimpleProductDto;
import com.enisco.flcos.server.entities.ProductEntity;
import com.enisco.flcos.server.repository.relational.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/products")
@RestController
public class ProductsController extends GenericControllerBase<ProductEntity, ProductDTO, NewProductDTO> {

    private final ProductRepository productRepository;

    public ProductsController(@Autowired ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    JpaRepository<ProductEntity, Long> getRepository() {
        return productRepository;
    }

    @GetMapping("all")
    public List<SimpleProductDto> getSimpleAll() {
        return getRepository().findAll()
                .stream()
                .map(entity -> modelMapper.map(entity, SimpleProductDto.class))
                .collect(Collectors.toList());
    }
}
