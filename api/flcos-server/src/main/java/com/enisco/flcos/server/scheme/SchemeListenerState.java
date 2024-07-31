package com.enisco.flcos.server.scheme;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.StringJoiner;

public class SchemeListenerState implements Serializable {
    private String schemeName;
    private LocalDateTime lastChange;

    public static SchemeListenerState with(String schemeName, LocalDateTime lastChange) {
        return new SchemeListenerState(schemeName, lastChange);
    }

    private SchemeListenerState(String schemeName, LocalDateTime lastChange) {
        this.schemeName = schemeName;
        this.lastChange = lastChange;
    }

    public String getSchemeName() {
        return this.schemeName;
    }

    public LocalDateTime getLastChange() {
        return this.lastChange;
    }

    public boolean equals(Object o) {
        if (this == o) {
            return true;
        } else if (o != null && this.getClass() == o.getClass()) {
            SchemeListenerState that = (SchemeListenerState)o;
            return Objects.equals(this.schemeName, that.schemeName) && Objects.equals(this.lastChange, that.lastChange);
        } else {
            return false;
        }
    }

    public int hashCode() {
        return Objects.hash(new Object[]{this.schemeName, this.lastChange});
    }

    public String toString() {
        return (new StringJoiner(", ", SchemeListenerState.class.getSimpleName() + "[", "]")).add("schemeName='" + this.schemeName + "'").add("lastChange=" + this.lastChange).toString();
    }
}
