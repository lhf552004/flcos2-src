package com.enisco.flcos.server.entities.job;

import java.io.Serializable;
import java.util.Optional;

public interface PropertyStore {
    Optional<Serializable> get(AttributePathProperty property);

    void put(AttributePathProperty property, Serializable value, AttributeChangeConsumer changeConsumer);
}
