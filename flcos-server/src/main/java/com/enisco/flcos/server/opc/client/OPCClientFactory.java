package com.enisco.flcos.server.opc.client;

import com.enisco.flcos.server.opc.server.FLCosOPCException;
import com.enisco.flcos.server.opc.server.OPCServerFactory;
import com.google.common.collect.ImmutableList;
import org.eclipse.milo.opcua.sdk.client.OpcUaClient;
import org.eclipse.milo.opcua.sdk.client.nodes.UaVariableNode;
import org.eclipse.milo.opcua.stack.core.Identifiers;
import org.eclipse.milo.opcua.stack.core.UaException;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.StatusCode;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.eclipse.milo.opcua.stack.core.types.enumerated.BrowseDirection;
import org.eclipse.milo.opcua.stack.core.types.enumerated.BrowseResultMask;
import org.eclipse.milo.opcua.stack.core.types.enumerated.NodeClass;
import org.eclipse.milo.opcua.stack.core.types.structured.BrowseDescription;
import org.eclipse.milo.opcua.stack.core.types.structured.BrowseResult;
import org.eclipse.milo.opcua.stack.core.types.structured.ReferenceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

import static org.eclipse.milo.opcua.stack.core.types.builtin.unsigned.Unsigned.uint;
import static org.eclipse.milo.opcua.stack.core.util.ConversionUtil.toList;

@Component
public class OPCClientFactory {
    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    OPCServerFactory moduleFactory;

    private Map<String, OPCClientHandler> opcClientHandlers = new HashMap<>();

    private List<String> alarmVariables = new ArrayList<>();

    private List<String> processVariables = new ArrayList<>();

    private List<OPCClientVariableSubscriber> subscribers = new ArrayList<>();

    private List<NodeId> nodeIds = new ArrayList<>();

    public void initialize() {
        moduleFactory.getEndpointUrls().forEach(endpointUrl -> {
            try {
                var opcClientHandler = new OPCClientHandler(endpointUrl);
                opcClientHandler.connect();
                opcClientHandlers.put(endpointUrl, opcClientHandler);
                browseNode("", opcClientHandler.getOpcUaClient(), Identifiers.RootFolder);
                // Initialize all variables
                nodeIds.forEach(nodeId -> {
                    try {
                        var value = readVariable(endpointUrl, nodeId);
                        logger.info("Read variable: " + nodeId.toString() + "value: " + value);
                        variables.put(nodeId.toParseableString(), value);
                    } catch (UaException e) {
                        logger.error(e.getMessage(), e);
                    }
                });

                var subscription = new OPCClientVariableSubscriber(opcClientHandler, nodeIds, this::variableChanged);
                subscription.run();
                subscribers.add(subscription);
            } catch (Exception exception) {
                logger.error(exception.getMessage(), exception);
            }
        });
    }

    private void browseNode(String indent, OpcUaClient client, NodeId browseRoot) {
        BrowseDescription browse = new BrowseDescription(
                browseRoot,
                BrowseDirection.Forward,
                Identifiers.References,
                true,
                uint(NodeClass.Object.getValue() | NodeClass.Variable.getValue()),
                uint(BrowseResultMask.All.getValue())
        );

        try {
            BrowseResult browseResult = client.browse(browse).get();

            List<ReferenceDescription> references = toList(browseResult.getReferences());

            for (ReferenceDescription rd : references) {
                logger.info("{} Node={}", indent, rd.getBrowseName().getName());

                // recursively browse to children
                rd.getNodeId().toNodeId(client.getNamespaceTable())
                        .ifPresent(nodeId -> {
                            nodeIds.add(nodeId);
                            browseNode(indent + "  ", client, nodeId);
                        });
            }
        } catch (InterruptedException | ExecutionException e) {
            logger.error("Browsing nodeId={} failed: {}", browseRoot, e.getMessage(), e);
        }
    }

    public Map<String, Object> getVariables() {
        return variables;
    }

    private Map<String, Object> variables = new HashMap<>();

    public Object readVariable(String endpointUrl, String nodeId) throws UaException {
        var clientHandler = opcClientHandlers.get(endpointUrl);
        if (clientHandler != null) {
            UaVariableNode node = clientHandler.getOpcUaClient().getAddressSpace().getVariableNode(NodeId.parse(nodeId));
            DataValue value = node.readValue();
            if (value != null)
                return value.getValue().getValue();
        }
        return null;
    }

    public Object readVariable(String endpointUrl, NodeId nodeId) throws UaException {
        var clientHandler = opcClientHandlers.get(endpointUrl);
        if (clientHandler != null) {
            UaVariableNode node = clientHandler.getOpcUaClient().getAddressSpace().getVariableNode(nodeId);
            DataValue value = node.readValue();
            if (value != null)
                return value.getValue().getValue();
        }
        return null;
    }

    public void WriteVariable(String endpointUrl, List<String> nodeIdStrings, List<Object> values) throws ExecutionException, InterruptedException {
        if(nodeIdStrings.size() != values.size()) {
            throw new FLCosOPCException("Write variables size not equal values size");
        }
        var clientHandler = opcClientHandlers.get(endpointUrl);
        if (clientHandler != null) {
            // don't write status or timestamps
            var nodeIds = nodeIdStrings.stream().map(NodeId::parse).collect(Collectors.toList());
            var dataValues = values.stream().map(value -> {
                Variant v = new Variant(value);
                return new DataValue(v, null, null);
            }).collect(Collectors.toList());

            // write asynchronously....
            CompletableFuture<List<StatusCode>> f =
                    clientHandler.getOpcUaClient().writeValues(nodeIds, dataValues);

            // ...but block for the results so we write in order
            List<StatusCode> statusCodes = f.get();

            var length = values.size();
            for (int i = 0; i < length; i++) {
                var statusCode = statusCodes.get(i);
                if (statusCode.isGood()) {
                    logger.info("Wrote '{}' to nodeId={}", values.get(i), nodeIds.get(i));
                }
            }
        }
    }

    private void variableChanged(NodeId nodeId, Variant value) {
        variables.put(nodeId.toParseableString(), value.getValue());
        logger.info(
                "variable changed: item={}, value={}",
                nodeId.toParseableString(), value.getValue());
    }
}
