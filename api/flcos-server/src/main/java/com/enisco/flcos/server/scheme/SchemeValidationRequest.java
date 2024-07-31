package com.enisco.flcos.server.scheme;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public final class SchemeValidationRequest implements Serializable {
    private String name;
    private List<ValidationField> fields;

    private SchemeValidationRequest() {
        this.fields = new ArrayList();
    }

    public String getName() {
        return this.name;
    }

    public void setName(String scheme) {
        this.name = scheme;
    }

    public List<ValidationField> getFields() {
        return this.fields;
    }

    public void addField(ValidationField validationField) {
        this.fields.add(validationField);
    }

    public String toString() {
        StringBuilder sb = new StringBuilder("SchemeValidationRequest{");
        sb.append("name='").append(this.name).append('\'');
        sb.append(", fields=").append(this.fields);
        sb.append('}');
        return sb.toString();
    }

    public static class Builder extends AbstractBuilder<SchemeValidationRequest> {
        public Builder() {
        }

        public SchemeValidationRequest.Builder name(String schemeName) {
            ((SchemeValidationRequest)this.getResult()).setName(schemeName);
            return this;
        }

        public SchemeValidationRequest.Builder field(String field, Object value) {
            ((SchemeValidationRequest)this.getResult()).addField(new ValidationField(field, (Serializable)value));
            return this;
        }

        protected SchemeValidationRequest create() {
            return new SchemeValidationRequest();
        }

        protected void assertValid() {
            String name = ((SchemeValidationRequest)this.getResult()).getName();
            this.assertThat(name != null && !name.isEmpty(), () -> {
                return "missing scheme name for SchemeValidationRequest";
            });
            this.assertThat(!((SchemeValidationRequest)this.getResult()).getFields().isEmpty(), () -> {
                return "at least one field for SchemeValidationRequest is required";
            });
        }
    }
}
