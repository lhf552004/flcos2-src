package com.enisco.flcos.server.entities.job;

import java.io.Serializable;

public interface Getter<T> {
    Serializable apply(T entity);
}
