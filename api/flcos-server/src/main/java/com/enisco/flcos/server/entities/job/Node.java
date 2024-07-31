package com.enisco.flcos.server.entities.job;

import com.enisco.flcos.server.entities.enums.NodeType;

public interface Node {
    /**
     * @return node type
     */
    NodeType getType();

    /**
     * @return node identifier
     */
    String getIdentifier();
}
