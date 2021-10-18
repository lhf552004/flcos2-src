package com.enisco.flcos.server.opc;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class OPCNodeItem {
    private UUID id;
    private String nodeId;
    private String name;
    private String nodeClass;
    private List<OPCNodeItem> children;
}
