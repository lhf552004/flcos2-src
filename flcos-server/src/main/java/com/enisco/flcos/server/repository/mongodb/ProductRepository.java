package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ProductRepository extends MongoRepository<Product, UUID> {
}
