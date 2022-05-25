package com.enisco.flcos.server.mapper;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.entities.EntityBase;

public class MapperUtil {

    public static void map(EntityBase entityBase, DTOBase dtoBase) {
        dtoBase.setId(entityBase.getId());
        dtoBase.setCreatedBy(entityBase.getCreatedBy());
        dtoBase.setModifiedBy(entityBase.getModifiedBy());
        dtoBase.setLastModifiedDate(entityBase.getLastModifiedDate());
    }
}
