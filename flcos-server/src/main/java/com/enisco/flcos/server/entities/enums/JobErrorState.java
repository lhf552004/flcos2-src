package com.enisco.flcos.server.entities.enums;

public enum JobErrorState {
    /**
     * no error or warning
     */
    OK,
    /**
     * one or more warnings, but no error
     */
    WARNING,
    /**
     * at least one error
     */
    ERROR
}
