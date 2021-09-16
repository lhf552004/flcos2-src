package com.enisco.flcos.server.entities.job;

import com.enisco.flcos.server.entities.enums.SchemeType;

import java.io.Serializable;

public interface AttributeChangeConsumer {
    void accept(Object var1, String var2, SchemeType var3, Serializable var4, Serializable var5);
}
