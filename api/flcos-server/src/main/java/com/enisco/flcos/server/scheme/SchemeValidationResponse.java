package com.enisco.flcos.server.scheme;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public final class SchemeValidationResponse implements Serializable {
    private boolean success = true;
    private List<ValidatedField> fields = new ArrayList();

    public SchemeValidationResponse() {
    }

    public boolean isSuccess() {
        return this.success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public List<ValidatedField> getValidatedFields() {
        return this.fields;
    }

    public void setValidatedFields(List<ValidatedField> fields) {
        this.fields = fields;
    }
}
