package com.enisco.flcos.server.mapper;

import com.enisco.flcos.server.entities.EntityBase;

public interface IFLCosMapper<Entity extends EntityBase, Dto> {
    Dto map(Entity entity);
    Entity map(Dto dto);
}
