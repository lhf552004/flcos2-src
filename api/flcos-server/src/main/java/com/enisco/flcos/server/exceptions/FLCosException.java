package com.enisco.flcos.server.exceptions;

public class FLCosException extends RuntimeException {
    public FLCosException(String message, Throwable reason) {
        super(message, reason);
    }

    public FLCosException(String message) {
        super(message);
    }
}
