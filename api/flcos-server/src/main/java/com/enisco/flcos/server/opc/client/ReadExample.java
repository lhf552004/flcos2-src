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

import com.google.common.collect.ImmutableList;
import org.eclipse.milo.opcua.sdk.client.OpcUaClient;
import org.eclipse.milo.opcua.sdk.client.nodes.UaVariableNode;
import org.eclipse.milo.opcua.stack.core.Identifiers;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.enumerated.ServerState;
import org.eclipse.milo.opcua.stack.core.types.enumerated.TimestampsToReturn;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@Component
public class ReadExample implements ClientExample {

//    public ReadExample() throws Exception {
//        ReadExample example = new ReadExample();
//
//        new ClientExampleRunner(example, true).run();
//    }

    public ReadExample() {

    }

    private List<NodeId> nodeIds;

    public ReadExample(List<NodeId> nodeIds) {
        this.nodeIds = nodeIds;
    }

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private OpcUaClient client;
    private CompletableFuture<OpcUaClient> future;

    @Override
    public void run(OpcUaClient client, CompletableFuture<OpcUaClient> future) throws Exception {
        // synchronous connect
        client.connect().get();
        this.client = client;
        this.future = future;
        // synchronous read request via VariableNode
        UaVariableNode node = client.getAddressSpace().getVariableNode(Identifiers.Server_ServerStatus_StartTime);
        DataValue value = node.readValue();

        logger.info("StartTime={}", value.getValue().getValue());

        // asynchronous read request
//        readServerStateAndTime().thenAccept(values -> {
//            DataValue v0 = values.get(0);
//            DataValue v1 = values.get(1);
//
//            logger.info("State={}", ServerState.from((Integer) v0.getValue().getValue()));
//            logger.info("CurrentTime={}", v1.getValue().getValue());
//
//            future.complete(client);
//        });

    }

    public CompletableFuture<List<DataValue>> readServerStateAndTime(OpcUaClient client) {
//        List<NodeId> nodeIds = ImmutableList.of(
//            Identifiers.Server_ServerStatus_State,
//            Identifiers.Server_ServerStatus_CurrentTime);

        return client.readValues(0.0, TimestampsToReturn.Both, nodeIds);
    }

    public CompletableFuture<List<DataValue>> readServerStateAndTime(List<NodeId> nodeIds) {
//        List<NodeId> nodeIds = ImmutableList.of(
//                Identifiers.Server_ServerStatus_State,
//                Identifiers.Server_ServerStatus_CurrentTime);

        return client.readValues(0.0, TimestampsToReturn.Both, nodeIds);
    }

    public void finishFuture() {
        future.complete(client);
    }

}
