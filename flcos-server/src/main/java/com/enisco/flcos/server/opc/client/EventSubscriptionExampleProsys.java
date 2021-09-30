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

public class EventSubscriptionExampleProsys extends EventSubscriptionExample {

    public EventSubscriptionExampleProsys() throws Exception {
        EventSubscriptionExampleProsys example = new EventSubscriptionExampleProsys();

        new ClientExampleRunner(example, false).run();
    }

    @Override
    public String getEndpointUrl() {
        return "opc.tcp://localhost:53530/OPCUA/SimulationServer";
    }

}
