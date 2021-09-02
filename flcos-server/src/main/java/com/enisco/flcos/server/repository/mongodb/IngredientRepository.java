package com.enisco.flcos.server.repository.mongodb;

import com.enisco.flcos.server.documents.Ingredient;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface IngredientRepository extends MongoRepository<Ingredient, UUID> {
}
