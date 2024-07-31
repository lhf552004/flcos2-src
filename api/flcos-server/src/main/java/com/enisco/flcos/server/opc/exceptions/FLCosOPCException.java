package com.enisco.flcos.server.opc.exceptions;

public class FLCosOPCException extends RuntimeException {
    public FLCosOPCException(String message, Throwable reason) {
        super(message, reason);
    }

    public FLCosOPCException(String message) {
        super(message);
    }
}
