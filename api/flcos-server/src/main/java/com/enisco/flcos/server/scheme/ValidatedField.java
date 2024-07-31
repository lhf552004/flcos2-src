package com.enisco.flcos.server.scheme;

import java.io.Serializable;

public final class ValidatedField implements Serializable {
    private String name;
    private boolean success;
    private String message;

    public ValidatedField() {
    }

    public boolean isSuccess() {
        return this.success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
