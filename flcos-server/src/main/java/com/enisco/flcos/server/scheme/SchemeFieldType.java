package com.enisco.flcos.server.scheme;

import com.enisco.flcos.server.entities.enums.SchemeType;

import java.util.Arrays;

public enum SchemeFieldType
{
    BOOL(1L, "boolean", SchemeType.BOOL),//
    BYTE(2L, "byte", SchemeType.BYTE),//
    INT(3L, "int", SchemeType.INT),//
    LONG(4L, "long", SchemeType.LONG),//
    FLOAT(5L, "float", SchemeType.FLOAT),//
    DOUBLE(6L, "double", SchemeType.DOUBLE),//
    TIME(7L, "time", SchemeType.TIME),//
    STRING(8L, "string", SchemeType.STRING),//
    DURATION(9L, "duration", SchemeType.DURATION),//
    NON_PRIMITIVE_SCHEME();

    private Long id;
    private String name;
    private SchemeType apiType;

    SchemeFieldType(Long id, String name, SchemeType apiType)
    {
        this.id = id;
        this.name = name;
        this.apiType = apiType;
    }

    SchemeFieldType()
    {
    }

    public Long getId()
    {
        return id;
    }

    public String getName()
    {
        return name;
    }

    public static SchemeFieldType getById(Long id)
    {
        return Arrays.stream(SchemeFieldType.values())
                .filter(t -> t.getId() != null)
                .filter(t -> t.getId()
                        .equals(id))
                .findFirst()
                .orElse(NON_PRIMITIVE_SCHEME);
    }

    public SchemeType toApi()
    {
        return apiType;
    }
}
