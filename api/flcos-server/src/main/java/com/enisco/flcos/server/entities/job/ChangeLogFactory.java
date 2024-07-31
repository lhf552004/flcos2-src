package com.enisco.flcos.server.entities.job;

import com.enisco.flcos.server.entities.enums.SchemeType;

import java.io.Serializable;

public interface ChangeLogFactory
{
    Object createChangeLog(String by,
                           String attribute,
                           SchemeType type,
                           Serializable oldValue,
                           Serializable newValue);
}
