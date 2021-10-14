package com.enisco.flcos.server.opc;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OPCNode {
    private String nodeId;
    private String nodeClass;
    private String browseName;
    private String displayName;
    private String description;
    private String writeMask;
    private String userWriteMask;
    private Object value;
    private String dataType;
    private String accessLevel;
    private String userAccessLevel;
}
