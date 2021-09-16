package com.enisco.flcos.server.scheme;

import java.io.Serializable;

public final class ValidationField implements Serializable {
    private final String name;
    private final Serializable value;

    public ValidationField(String name, Serializable value) {
        this.name = name;
        this.value = value;
    }

    public Serializable getValue() {
        return this.value;
    }

    public String getName() {
        return this.name;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder("ValidationField{");
        sb.append("name='").append(this.name).append('\'');
        sb.append(", value=").append(this.value);
        sb.append('}');
        return sb.toString();
    }
}
