package com.enisco.flcos.server.exceptions;

public final class SchemeException extends RuntimeException {
    public SchemeException(String message, Throwable reason) {
        super(message, reason);
    }

    public SchemeException(String message) {
        super(message);
    }
}

