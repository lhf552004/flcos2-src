package com.enisco.flcos.server.scheme;

import com.enisco.flcos.server.entities.enums.SchemeType;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Stream;

public final class Field implements Serializable {
    private String name;
    private String parent;
    private String fullName;
    private String scheme;
    /** @deprecated */
    @Deprecated
    private Integer fieldSize;
    private Integer arraySize;
    private SchemeType type;
    private List<Field> fields;
    private String description;
    private String unit;
    private List<FieldAttribute> attributes;
//    private Datasource datasource;

    private Field() {
        this.fields = new ArrayList();
        this.attributes = new ArrayList();
//        this.datasource = new Datasource();
    }

    public List<Field> getFields() {
        return this.fields;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFullName() {
        return this.fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getParent() {
        return this.parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }

    /** @deprecated */
    @Deprecated
    public Optional<Integer> getFieldSize() {
        return Optional.ofNullable(this.fieldSize);
    }

    public void setFieldSize(Integer fieldSize) {
        this.fieldSize = fieldSize;
    }

    public Optional<Integer> getArraySize() {
        return Optional.ofNullable(this.arraySize);
    }

    public void setArraySize(Integer arraySize) {
        this.arraySize = arraySize;
    }

    public String getScheme() {
        return this.scheme;
    }

    public void setScheme(String scheme) {
        this.scheme = scheme;
    }

    public SchemeType getType() {
        return this.type;
    }

    public void setType(SchemeType type) {
        this.type = type;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUnit() {
        return this.unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("   name: ");
        sb.append(this.name);
        sb.append('\n');
        sb.append("   description: ");
        sb.append(this.description);
        sb.append('\n');
        sb.append("   scheme: ");
        sb.append(this.scheme);
        sb.append('\n');
        sb.append("   unit: ");
        sb.append(this.unit);
        sb.append('\n');
        if (this.fieldSize != null) {
            sb.append("   fieldSize: ");
            sb.append(this.fieldSize);
            sb.append('\n');
        }

        if (this.arraySize != null) {
            sb.append("   arraySize: ");
            sb.append(this.arraySize);
            sb.append('\n');
        }

        return sb.toString();
    }

    public Stream<Field> stream() {
        return Stream.concat(Stream.of(this), this.getFields().stream().flatMap(Field::stream));
    }

    public boolean isPrimitive() {
        return this.getType() != SchemeType.ARRAY && this.getType() != SchemeType.STRUCT;
    }

    public List<FieldAttribute> getAttributes() {
        return this.attributes;
    }

    public void setAttributes(List<FieldAttribute> attributes) {
        this.attributes = attributes;
    }

//    public Datasource getDatasource() {
//        return this.datasource;
//    }
//
//    public void setDatasource(Datasource datasource) {
//        this.datasource = datasource;
//    }

    public boolean isUnique() {
        return this.attributes.stream().map(FieldAttribute::getType).anyMatch((t) -> {
            return t == FieldAttributeType.UNIQUE;
        });
    }

    public boolean isNotNull() {
        return this.attributes.stream().map(FieldAttribute::getType).anyMatch((t) -> {
            return t == FieldAttributeType.NOT_NULL;
        });
    }

    public boolean equals(Object o) {
        if (this == o) {
            return true;
        } else if (o != null && this.getClass() == o.getClass()) {
            Field field = (Field)o;
            boolean b1 = this.name.equals(field.name) && Objects.equals(this.parent, field.parent) && this.fullName.equals(field.fullName) && this.scheme.equals(field.scheme) && Objects.equals(this.fieldSize, field.fieldSize);
            boolean b2 = Objects.equals(this.arraySize, field.arraySize) && this.type == field.type && this.fields.equals(field.fields) && Objects.equals(this.description, field.description);
//            boolean b3 = Objects.equals(this.unit, field.unit) && this.attributes.equals(field.attributes) && this.datasource.equals(field.datasource);
            return b1 && b2;
        } else {
            return false;
        }
    }

    public int hashCode() {
        return Objects.hash(new Object[]{this.name, this.parent, this.fullName, this.scheme, this.fieldSize, this.arraySize, this.type, this.fields, this.description, this.unit, this.attributes});
    }

    public static final class Builder extends AbstractBuilder<Field> {
        public Builder() {
        }

        protected Field create() {
            return new Field();
        }

        public Field.Builder name(String name) {
            ((Field)this.getResult()).setName(name);
            return this;
        }

        public Field.Builder fullName(String fullName) {
            ((Field)this.getResult()).setFullName(fullName);
            return this;
        }

        public Field.Builder scheme(String scheme) {
            ((Field)this.getResult()).setScheme(scheme);
            return this;
        }

        /** @deprecated */
        @Deprecated
        public Field.Builder fieldSize(Integer size) {
            ((Field)this.getResult()).setFieldSize(size);
            return this;
        }

        public Field.Builder description(String description) {
            ((Field)this.getResult()).setDescription(description);
            return this;
        }

        public Field.Builder unit(String unit) {
            ((Field)this.getResult()).setUnit(unit);
            return this;
        }

        public Field.Builder arraySize(Integer size) {
            ((Field)this.getResult()).setArraySize(size);
            return this;
        }

        public Field.Builder type(SchemeType type) {
            ((Field)this.getResult()).setType(type);
            return this;
        }

        public Field.Builder attribute(FieldAttribute attribute) {
            ((Field)this.getResult()).getAttributes().add(attribute);
            return this;
        }

//        public Field.Builder datasource(Datasource datasource) {
//            ((Field)this.getResult()).setDatasource(datasource);
//            return this;
//        }

        public Field.Builder parent(String parent) {
            ((Field)this.getResult()).setParent(parent);
            return this;
        }

        public Field.Builder field(Field field) {
            ((Field)this.getResult()).getFields().add(field);
            return this;
        }
    }
}
