/*
 * Copyright (c) 2019 the Eclipse Milo Authors
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */

package com.enisco.flcos.server.opc.client;

import org.eclipse.milo.opcua.sdk.client.OpcUaClient;
import org.eclipse.milo.opcua.sdk.client.api.subscriptions.UaMonitoredItem;
import org.eclipse.milo.opcua.sdk.client.api.subscriptions.UaSubscription;
import org.eclipse.milo.opcua.stack.core.AttributeId;
import org.eclipse.milo.opcua.stack.core.Identifiers;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.QualifiedName;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.eclipse.milo.opcua.stack.core.types.builtin.unsigned.UInteger;
import org.eclipse.milo.opcua.stack.core.types.enumerated.MonitoringMode;
import org.eclipse.milo.opcua.stack.core.types.enumerated.TimestampsToReturn;
import org.eclipse.milo.opcua.stack.core.types.structured.MonitoredItemCreateRequest;
import org.eclipse.milo.opcua.stack.core.types.structured.MonitoringParameters;
import org.eclipse.milo.opcua.stack.core.types.structured.ReadValueId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.function.BiConsumer;
import java.util.stream.Collectors;

import static com.google.common.collect.Lists.newArrayList;
import static org.eclipse.milo.opcua.stack.core.types.builtin.unsigned.Unsigned.uint;

public class OPCClientVariableSubscriber {

//    public SubscriptionExample() throws Exception {
//        SubscriptionExample example = new SubscriptionExample();
//
//        new ClientExampleRunner(example).run();
//    }

    public OPCClientVariableSubscriber(OPCClientHandler opcClientHandler, List<NodeId> nodeIdsToSubscribe, BiConsumer<NodeId, Variant> consumer) {
        this.opcClientHandler = opcClientHandler;
        this.nodeIdsToSubscribe = nodeIdsToSubscribe;
        this.consumer = consumer;
    }

    private OPCClientHandler opcClientHandler;

    private List<NodeId> nodeIdsToSubscribe;

    private BiConsumer consumer;

    private final Logger logger = LoggerFactory.getLogger(getClass());

    public void run() throws Exception {
        // synchronous connect
//        client.connect().get();

        // create a subscription @ 1000ms
        UaSubscription subscription = opcClientHandler.getOpcUaClient().getSubscriptionManager().createSubscription(1000.0).get();



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

        var requests = nodeIdsToSubscribe.stream().map(nodeId -> {
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
            item.getReadValueId().getNodeId(), value.getValue());
        consumer.accept(item.getReadValueId().getNodeId(), value.getValue());
    }

}