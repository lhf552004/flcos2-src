package com.enisco.flcos.server.scheme;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public final class Scheme implements Serializable {
    private String name;
    private String description;
    private boolean primitive;
    private LocalDateTime lastChange;
    private List<Field> fields;

    private Scheme() {
        this.fields = new ArrayList();
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return this.description;
    }

    public boolean isPrimitive() {
        return this.primitive;
    }

    public void setPrimitive(boolean primitive) {
        this.primitive = primitive;
    }

    public void setLastChange(LocalDateTime lastChange) {
        this.lastChange = lastChange;
    }

    public LocalDateTime getLastChange() {
        return this.lastChange;
    }

    public List<Field> getFields() {
        return this.fields;
    }

    public void setFields(List<Field> fields) {
        this.fields = fields;
    }

    public Optional<Field> getField(String name) {
        return this.stream().filter((field) -> {
            return name.equals(field.getFullName());
        }).reduce((a, b) -> {
            throw new IllegalStateException("Found multiple fields with id [" + name + "]!");
        });
    }

    public Stream<Field> stream() {
        return this.getFields().stream().flatMap(Field::stream);
    }

    public static class Builder extends AbstractBuilder<Scheme> {
        public Builder() {
        }

        protected Scheme create() {
            return new Scheme();
        }

        public Scheme.Builder name(String name) {
            ((Scheme)this.getResult()).setName(name);
            return this;
        }

        public Scheme.Builder primitive(boolean primitive) {
            ((Scheme)this.getResult()).setPrimitive(primitive);
            return this;
        }

        public Scheme.Builder description(String description) {
            ((Scheme)this.getResult()).setDescription(description);
            return this;
        }

        public Scheme.Builder lastChange(LocalDateTime lastChange) {
            ((Scheme)this.getResult()).setLastChange(lastChange);
            return this;
        }

        public Scheme.Builder field(Field field) {
            ((Scheme)this.getResult()).getFields().add(field);
            return this;
        }
    }
}
