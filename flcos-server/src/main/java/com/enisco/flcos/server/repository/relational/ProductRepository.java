package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.ProductEntity;
import com.enisco.flcos.server.entities.scheme.SchemeFieldEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    Optional<ProductEntity> findByName(String name);
}
