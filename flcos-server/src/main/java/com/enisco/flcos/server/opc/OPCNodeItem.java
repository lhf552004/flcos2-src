package com.enisco.flcos.server.opc;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class OPCNodeItem {
    private String nodeId;
    private String name;
    private String nodeClass;
    private List<OPCNodeItem> children;
}
