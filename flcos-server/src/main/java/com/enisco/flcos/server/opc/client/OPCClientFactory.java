package com.enisco.flcos.server.opc.client;

import com.enisco.flcos.server.opc.AbstractOPCFactory;
import com.enisco.flcos.server.opc.EmesModule;
import com.enisco.flcos.server.opc.OPCNodeItem;
import com.enisco.flcos.server.opc.OPCNodeList;
import com.enisco.flcos.server.opc.server.FLCosOPCException;
import com.enisco.flcos.server.opc.server.OPCServerFactory;
import com.enisco.flcos.server.repository.postgresql.OPCServerRepository;
import org.eclipse.milo.opcua.sdk.client.api.subscriptions.UaMonitoredItem;
import org.eclipse.milo.opcua.sdk.client.api.subscriptions.UaSubscription;
import org.eclipse.milo.opcua.sdk.client.nodes.UaNode;
import org.eclipse.milo.opcua.sdk.client.nodes.UaVariableNode;
import org.eclipse.milo.opcua.stack.core.AttributeId;
import org.eclipse.milo.opcua.stack.core.Identifiers;
import org.eclipse.milo.opcua.stack.core.UaException;
import org.eclipse.milo.opcua.stack.core.types.builtin.*;
import org.eclipse.milo.opcua.stack.core.types.builtin.unsigned.UInteger;
import org.eclipse.milo.opcua.stack.core.types.enumerated.*;
import org.eclipse.milo.opcua.stack.core.types.structured.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

import static com.google.common.collect.Lists.newArrayList;
import static org.eclipse.milo.opcua.stack.core.types.builtin.unsigned.Unsigned.uint;
import static org.eclipse.milo.opcua.stack.core.util.ConversionUtil.toList;

@Component
public class OPCClientFactory extends AbstractOPCFactory {
    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    OPCServerRepository opcServerRepository;

    @Autowired
    OPCServerFactory moduleFactory;

    private Map<String, OPCClientHandler> opcClientHandlers;

    private List<String> alarmVariables;

    private List<String> processVariables;

    private Map<String, List<NodeId>> nodeIdsMap;

    private Map<String, Object> variables;

    private Map<String, List<EmesModule>> modulesMap;

    private Map<String, OPCNodeList> opcNodeListMap;

    public void initialize() {
        // Reset
        initializeVariables();

        var opcServers = opcServerRepository.findAll();
        opcServers.forEach(opcServerEntity -> {
            try {
                var endpointUrl = "opc.tcp://" +
                        opcServerEntity.getAddress() + ":" +
                        opcServerEntity.getTcpPort() + "/" +
                        opcServerEntity.getName();
                var opcClientHandler = new OPCClientHandler(endpointUrl);
                opcClientHandler.connect();
                opcClientHandlers.put(endpointUrl, opcClientHandler);
                var modFolderPath = Paths.get(opcServerEntity.getConfigPath());
                List<EmesModule> modules = new ArrayList<>();
                if(Files.exists(modFolderPath)) {
                    modules = loadModules(modFolderPath);
                    modulesMap.put(endpointUrl, modules);
                }
                var parentIdentifiers = modules.stream().map(module -> module.getName()).collect(Collectors.toList());
                var opcNodeList = new OPCNodeList();
                var rootNodeDTO = new OPCNodeItem();
                rootNodeDTO.setNodeId(Identifiers.ObjectsFolder.toParseableString());
                rootNodeDTO.setNodeClass(NodeClass.Object.name());
                rootNodeDTO.setName("Objects");
                rootNodeDTO.setChildren(new ArrayList<>());
                opcNodeList.setRoot(rootNodeDTO);
                opcNodeListMap.put(endpointUrl, opcNodeList);
                browseNode("", rootNodeDTO, parentIdentifiers, opcClientHandler, Identifiers.ObjectsFolder);
                // Initialize all variables
//                nodeIds.forEach(nodeId -> {
//                    try {
//                        var value = readVariable(endpointUrl, nodeId);
//                        logger.info("Read variable: " + nodeId.toString() + "value: " + value);
//                        variables.put(nodeId.toParseableString(), value);
//                    } catch (UaException e) {
//                        logger.error(e.getMessage(), e);
//                    }
//                });

                subscribe(opcClientHandler);

            } catch (Exception exception) {
                logger.error(exception.getMessage(), exception);
            }
        });
        moduleFactory.getEndpointUrls().forEach(endpointUrl -> {

        });
    }

    private void initializeVariables() {
        opcClientHandlers = new HashMap<>();
        alarmVariables = new ArrayList<>();
        processVariables = new ArrayList<>();
        nodeIdsMap = new HashMap<>();
        variables = new HashMap<>();
        modulesMap = new HashMap<>();
        opcNodeListMap = new HashMap<>();
    }

    private void browseNode(String indent, OPCNodeItem parentNodeDTO, List<String> parentIdentifiers, OPCClientHandler clientHandler, NodeId browseRoot) {
        BrowseDescription browse = new BrowseDescription(
                browseRoot,
                BrowseDirection.Forward,
                Identifiers.References,
                true,
                uint(NodeClass.Object.getValue() | NodeClass.Variable.getValue()),
                uint(BrowseResultMask.All.getValue())
        );

        try {
            BrowseResult browseResult = clientHandler.getOpcUaClient().browse(browse).get();

            List<ReferenceDescription> references = toList(browseResult.getReferences());

            for (ReferenceDescription rd : references) {


                // recursively browse to children
                rd.getNodeId().toNodeId(clientHandler.getOpcUaClient().getNamespaceTable())
                        .ifPresent(nodeId -> {
                            var identifier = nodeId.getIdentifier().toString();
                            var count = parentIdentifiers.stream().filter(identifier::contains).count();
                            if (identifier.equals("FLCos") || count > 0) {
                                var nodeItem = new OPCNodeItem();
                                nodeItem.setNodeId(nodeId.toParseableString());
                                nodeItem.setName(rd.getBrowseName().getName());
                                nodeItem.setNodeClass(rd.getNodeClass().name());
                                nodeItem.setChildren(new ArrayList<>());
                                parentNodeDTO.getChildren().add(nodeItem);
                                if (rd.getNodeClass() == NodeClass.Variable) {
                                    logger.info("{} NodeId={}, BrowseName={}", indent, nodeId.toParseableString(), rd.getBrowseName().getName());
                                    if(nodeIdsMap.containsKey(clientHandler.getEndpointUrl())) {
                                        nodeIdsMap.get(clientHandler.getEndpointUrl()).add(nodeId);
                                    }else {
                                        var nodeIds = new ArrayList<NodeId>();
                                        nodeIds.add(nodeId);
                                        nodeIdsMap.put(clientHandler.getEndpointUrl(), nodeIds);
                                    }

                                }
                                browseNode(indent + "  ", nodeItem, parentIdentifiers, clientHandler, nodeId);
                            }
                        });
            }
        } catch (InterruptedException | ExecutionException e) {
            logger.error("Browsing nodeId={} failed: {}", browseRoot, e.getMessage(), e);
        }
    }

    public Map<String, Object> getVariables() {
        return variables;
    }

    public Set<String> getEndpointUrls() {
        return opcClientHandlers.keySet();
    }

    public Map<String, List<EmesModule>> getModulesMap() {
        return modulesMap;
    }

    public Map<String, OPCNodeList> getOpcNodeListMap() {
        return opcNodeListMap;
    }

    public Object readVariableNodeValue(String endpointUrl, String nodeId) throws UaException {
        var clientHandler = opcClientHandlers.get(endpointUrl);
        if (clientHandler != null) {
            UaVariableNode node = clientHandler.getOpcUaClient().getAddressSpace().getVariableNode(NodeId.parse(nodeId));
            DataValue value = node.readValue();
            if (value != null)
                return value.getValue().getValue();
        }
        return null;
    }

    public UaNode readNode(String endpointUrl, String nodeId, String nodeClassStr) throws UaException {
        var clientHandler = opcClientHandlers.get(endpointUrl);
        if (clientHandler != null) {
            var nodeClass = NodeClass.valueOf(nodeClassStr);
            switch (nodeClass) {
                case Variable:
                    return clientHandler.getOpcUaClient().getAddressSpace().getVariableNode(NodeId.parse(nodeId));
                case Object:
                    return clientHandler.getOpcUaClient().getAddressSpace().getObjectNode(NodeId.parse(nodeId));
            }
        }
        return null;
    }

    public Object readVariableNodeValue(String endpointUrl, NodeId nodeId) throws UaException {
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

    private void subscribe(OPCClientHandler opcClientHandler) throws ExecutionException, InterruptedException {
        // create a subscription @ 1000ms
        UaSubscription subscription = opcClientHandler.getOpcUaClient().getSubscriptionManager().createSubscription(1000.0).get();

        var nodeIdsToSubscribe = nodeIdsMap.get(opcClientHandler.getEndpointUrl());

        var requests = nodeIdsToSubscribe.stream().map(nodeId -> {
            // IMPORTANT: client handle must be unique per item within the context of a subscription.
            // You are not required to use the UaSubscription's client handle sequence; it is provided as a convenience.
            // Your application is free to assign client handles by whatever means necessary.
            UInteger clientHandle = subscription.nextClientHandle();

            MonitoringParameters parameters = new MonitoringParameters(
                    clientHandle,
                    1000.0,     // sampling interval
                    null,       // filter, null means use default
                    uint(10),   // queue size
                    true        // discard oldest
            );
            // subscribe to the Value attribute of the server's CurrentTime node
            ReadValueId readValueId = new ReadValueId(
                    nodeId,
                    AttributeId.Value.uid(), null, QualifiedName.NULL_VALUE
            );
            return new MonitoredItemCreateRequest(
                    readValueId,
                    MonitoringMode.Reporting,
                    parameters
            );
        }).collect(Collectors.toList());



        // when creating items in MonitoringMode.Reporting this callback is where each item needs to have its
        // value/event consumer hooked up. The alternative is to create the item in sampling mode, hook up the
        // consumer after the creation call completes, and then change the mode for all items to reporting.
        UaSubscription.ItemCreationCallback onItemCreated =
                (item, id) -> item.setValueConsumer(this::onSubscriptionValue);

        List<UaMonitoredItem> items = subscription.createMonitoredItems(
                TimestampsToReturn.Both,
                newArrayList(requests),
                onItemCreated
        ).get();

        for (UaMonitoredItem item : items) {
            if (item.getStatusCode().isGood()) {
                logger.info("item created for nodeId={}", item.getReadValueId().getNodeId().toParseableString());
            } else {
                logger.warn(
                        "failed to create item for nodeId={} (status={})",
                        item.getReadValueId().getNodeId().toParseableString(), item.getStatusCode());
            }
        }
    }

    private void onSubscriptionValue(UaMonitoredItem item, DataValue value) {
        logger.info(
                "subscription value received: item={}, value={}",
                item.getReadValueId().getNodeId().toParseableString(), value.getValue().getValue());
        variables.put(item.getReadValueId().getNodeId().toParseableString(), value.getValue().getValue());
    }

}
