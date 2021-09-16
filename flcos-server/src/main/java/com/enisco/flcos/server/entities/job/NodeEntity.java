package com.enisco.flcos.server.entities.job;

import com.enisco.flcos.server.entities.Consts;
import com.enisco.flcos.server.entities.EntityBase;
import com.enisco.flcos.server.entities.enums.JobErrorState;
import com.enisco.flcos.server.entities.enums.NodeStatus;
import com.enisco.flcos.server.entities.enums.NodeType;
import org.bson.Document;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity(name = "job_node")
public class NodeEntity extends EntityBase
{
    static final String EXTRA_ROLE_FOR_DELETE = "PCS_JOBS_DELETE_AFTER_FINISHED";

    // @formatter:on

    public static final String PARAMETER_JOB_ID = "jobId";
    public static final String PARAMETER_GRAPH_ID = "graphId";

    private static final Logger LOGGER = Logger.getLogger(NodeEntity.class.getName());

//    @Id
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PCS_ID")
//    private long id;

    @Column(name = "NODE_KEY", length = Consts.LENGTH_NODE_KEY)
    private String key;

    @Column(name = "NODE_TYPE", insertable = false, updatable = false)
    private String discriminator;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "JOB_ID", nullable = false)
    private JobEntity job;

    private NodeStatus status = NodeStatus.NONE;

    @Column(name = "ERROR_STATE")
    private JobErrorState errorState = JobErrorState.OK;

    @Column(name = "GRAPH_ID", length = Consts.LENGTH_GRAPH_ID)
    private String graphId;

    @Column(length = Consts.LENGTH_NODE_NAME)
    private String identifier;

    @Column(length = Consts.LENGTH_ATTRIBUTE_NAME)
    private String translation;

//    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "node", orphanRemoval = true)
//    @MapKey(name = "name")
//    private Map<String, NodeAttributeEntity> attributes = new HashMap<>();

//    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "source", orphanRemoval = true)
//    private List<LinkEntity> outbound = new ArrayList<>();
//
//    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "destination", orphanRemoval = true)
//    private List<LinkEntity> inbound = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "node", orphanRemoval = true)
    private List<NodeErrorEntity> errors = new ArrayList<>();

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "PARENT_ID")
//    private SubprocessNodeEntity parent;
//
//    /**
//     * Do not use this reference for inserting changelog entries. Use a query instead!
//     */
//    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "node")
//    private List<NodeChangeLogEntity> changelog = new ArrayList<>();
//
//    @Transient
//    private NodeType type;
//
//    @Column(name = "CURRENT_ALTERNATIVE")
//    private boolean currentAlternative;
//
//    @Transient
//    private Optional<ComponentNodeEntity> cachedComponentNode = Optional.empty();

    public NodeEntity()
    {

    }


}
