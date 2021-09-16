package com.enisco.flcos.server.scheme;

import java.io.Serializable;
import java.util.Objects;

public final class FieldAttribute implements Serializable {
    private FieldAttributeType type;
    private Object value;
    private Double minValue;
    private Double maxValue;

    private FieldAttribute() {
    }

    public FieldAttributeType getType() {
        return this.type;
    }

    public void setType(FieldAttributeType type) {
        this.type = type;
    }

    public Object getValue() {
        return this.value;
    }

    public void setValue(Object value) {
        this.value = value;
    }

    public Double getMinValue() {
        return this.minValue;
    }

    public void setMinValue(Double minValue) {
        this.minValue = minValue;
    }

    public Double getMaxValue() {
        return this.maxValue;
    }

    public void setMaxValue(Double maxValue) {
        this.maxValue = maxValue;
    }

    public boolean validateValue(Object convertedValue) {
        return this.type.validate(this, convertedValue);
    }

    public boolean equals(Object o) {
        if (this == o) {
            return true;
        } else if (o != null && this.getClass() == o.getClass()) {
            FieldAttribute that = (FieldAttribute)o;
            return this.type == that.type && Objects.equals(this.value, that.value) && Objects.equals(this.minValue, that.minValue) && Objects.equals(this.maxValue, that.maxValue);
        } else {
            return false;
        }
    }

    public int hashCode() {
        return Objects.hash(new Object[]{this.type, this.value, this.minValue, this.maxValue});
    }

    public static class Builder extends AbstractBuilder<FieldAttribute> {
        public Builder() {
        }

        public FieldAttribute.Builder type(FieldAttributeType type) {
            FieldAttribute result = (FieldAttribute)this.getResult();
            result.type = type;
            result.value = result.value != null ? type.convertValue(result.value.toString()) : null;
            return this;
        }

        public FieldAttribute.Builder value(String value) {
            FieldAttribute result = (FieldAttribute)this.getResult();
            result.value = result.type != null ? result.type.convertValue(value) : value;
            return this;
        }

        public FieldAttribute.Builder minValue(Double minValue) {
            ((FieldAttribute)this.getResult()).minValue = minValue;
            return this;
        }

        public FieldAttribute.Builder maxValue(Double maxValue) {
            ((FieldAttribute)this.getResult()).maxValue = maxValue;
            return this;
        }

        protected void assertValid() {
            this.assertThat(((FieldAttribute)this.getResult()).type != null, () -> {
                return "attribute type has to been defined";
            });
        }

        protected FieldAttribute create() {
            return new FieldAttribute();
        }
    }
}
