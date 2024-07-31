package com.enisco.flcos.server.entities.job;

import com.enisco.flcos.server.entities.scheme.SchemeAttributeEntity;

import javax.persistence.*;

@MappedSuperclass
public class NodeAttributeEntity
        extends SchemeAttributeEntity {
//    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
//    @JoinColumn(name = "PARENT_ID", updatable = false)
//    @MapKey(name = "suffix")
//    private Map<String, NodeAttributeEntity> children = new HashMap<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "NODE_ID", nullable = false)
    private NodeEntity node;

    @Override
    public String toString()
    {
        return String.format("NodeAttributeEntity{id: %d, name: %s, type: %s, value: %s}",
                getId(),
                getName(),
                getType(),
                getValue());
    }
}
