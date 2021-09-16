package com.enisco.flcos.server.scheme;

import java.util.function.Supplier;

public abstract class AbstractBuilder<T> {
    private T result = this.create();
    private Boolean built = false;

    public AbstractBuilder() {
    }

    protected abstract T create();

    protected void assertValid() {
    }

    protected T getResult() {
        return this.result;
    }

    protected void assertThat(boolean condition, Supplier<String> message) {
        if (!condition) {
            throw new IllegalArgumentException((String)message.get());
        }
    }

    public T build() {
        if (this.built) {
            throw new IllegalStateException("Builder cannot be reused!");
        } else {
            this.built = true;
            this.assertValid();
            return this.result;
        }
    }
}
