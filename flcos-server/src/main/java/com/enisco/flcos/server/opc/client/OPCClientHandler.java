/*
 * Copyright (c) 2021 the Eclipse Milo Authors
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */

package com.enisco.flcos.server.opc.client;

import com.enisco.flcos.server.opc.server.FLCosOPCServer;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.eclipse.milo.opcua.sdk.client.OpcUaClient;
import org.eclipse.milo.opcua.sdk.client.api.identity.AnonymousProvider;
import org.eclipse.milo.opcua.sdk.client.api.identity.IdentityProvider;
import org.eclipse.milo.opcua.stack.client.security.DefaultClientCertificateValidator;
import org.eclipse.milo.opcua.stack.core.security.DefaultTrustListManager;
import org.eclipse.milo.opcua.stack.core.security.SecurityPolicy;
import org.eclipse.milo.opcua.stack.core.types.builtin.LocalizedText;
import org.eclipse.milo.opcua.stack.core.types.structured.EndpointDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.Security;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.function.Predicate;

import static org.eclipse.milo.opcua.stack.core.types.builtin.unsigned.Unsigned.uint;

public class OPCClientHandler {

    static {
        // Required for SecurityPolicy.Aes256_Sha256_RsaPss
        Security.addProvider(new BouncyCastleProvider());
    }

    private final String endpointUrl;

    public String getEndpointUrl() {
        return endpointUrl;
    }

    private Predicate<EndpointDescription> endpointFilter() {
        return e -> getSecurityPolicy().getUri().equals(e.getSecurityPolicyUri());
    }

    private SecurityPolicy getSecurityPolicy() {
        return SecurityPolicy.Basic256Sha256;
    }

    private IdentityProvider getIdentityProvider() {
        return new AnonymousProvider();
    }

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final CompletableFuture<OpcUaClient> future = new CompletableFuture<>();

    private FLCosOPCServer exampleServer;

    private DefaultTrustListManager trustListManager;

    private ClientExample clientExample;
    private boolean serverRequired;

    private OpcUaClient opcUaClient;

    public OPCClientHandler(String endpointUrl) throws Exception {
        this.endpointUrl = endpointUrl;
        opcUaClient = createClient();
    }

    public void connect() throws ExecutionException, InterruptedException {
        opcUaClient.connect().get();
    }

    public OPCClientHandler(ClientExample clientExample) throws Exception {
        this(clientExample, true);
    }

    public OPCClientHandler(ClientExample clientExample, boolean serverRequired) throws Exception {
        this.clientExample = clientExample;
        this.serverRequired = serverRequired;
        this.endpointUrl = "";
    }

    public OPCClientHandler(ClientExample clientExample, FLCosOPCServer exampleServer) throws Exception {
        this.clientExample = clientExample;
//        this.serverRequired = serverRequired;
        this.exampleServer = exampleServer;
        this.endpointUrl = exampleServer.getEndpointUrl();
//        if (serverRequired) {
////            exampleServer = ExampleServer.getInstance();
//        }
    }

    public OpcUaClient getOpcUaClient() {
        return opcUaClient;
    }

    private OpcUaClient createClient() throws Exception {
        Path securityTempDir = Paths.get(System.getProperty("java.io.tmpdir"), "client", "security");
        Files.createDirectories(securityTempDir);
        if (!Files.exists(securityTempDir)) {
            throw new Exception("unable to create security dir: " + securityTempDir);
        }

        File pkiDir = securityTempDir.resolve("pki").toFile();

        LoggerFactory.getLogger(getClass())
            .info("security dir: {}", securityTempDir.toAbsolutePath());
        LoggerFactory.getLogger(getClass())
            .info("security pki dir: {}", pkiDir.getAbsolutePath());

        KeyStoreLoader loader = new KeyStoreLoader().load(securityTempDir);

        trustListManager = new DefaultTrustListManager(pkiDir);

        DefaultClientCertificateValidator certificateValidator =
            new DefaultClientCertificateValidator(trustListManager);

        return OpcUaClient.create(
            getEndpointUrl(),
            endpoints ->
                endpoints.stream()
                    .filter(endpointFilter())
                    .findFirst(),
            configBuilder ->
                configBuilder
                    .setApplicationName(LocalizedText.english("Enisco FLCos opc-ua client"))
                    .setApplicationUri("urn:enisco:flcos:opc:client")
                    .setKeyPair(loader.getClientKeyPair())
                    .setCertificate(loader.getClientCertificate())
                    .setCertificateChain(loader.getClientCertificateChain())
                    .setCertificateValidator(certificateValidator)
                    .setIdentityProvider(getIdentityProvider())
                    .setRequestTimeout(uint(5000))
                    .build()
        );
    }

    public void run() {
        try {
//            OpcUaClient client = createClient();

            // For the sake of the examples we will create mutual trust between the client and
            // server so we can run them with security enabled by default.
            // If the client example is pointed at another server then the rejected certificate
            // will need to be moved from the security "pki/rejected" directory to the
            // "pki/trusted/certs" directory.

            // Make the example server trust the example client certificate by default.
//            client.getConfig().getCertificate().ifPresent(
//                certificate ->
//                    exampleServer.getServer().getConfig().getTrustListManager().addTrustedCertificate(certificate)
//            );

            // Make the example client trust the example server certificate by default.
//            exampleServer.getServer().getConfig().getCertificateManager().getCertificates().forEach(
//                certificate ->
//                    trustListManager.addTrustedCertificate(certificate)
//            );

            future.whenCompleteAsync((c, ex) -> {
                if (ex != null) {
                    logger.error("Error running example: {}", ex.getMessage(), ex);
                }

//                try {
////                    client.disconnect().get();
////                    if (serverRequired && exampleServer != null) {
////                        exampleServer.shutdown().get();
////                    }
////                    Stack.releaseSharedResources();
//                } catch (InterruptedException | ExecutionException e) {
//                    logger.error("Error disconnecting: {}", e.getMessage(), e);
//                }

//                try {
//                    Thread.sleep(1000);
//                    System.exit(0);
//                } catch (InterruptedException e) {
//                    e.printStackTrace();
//                }
            });

            try {
                clientExample.run(opcUaClient, future);
                future.get(60, TimeUnit.SECONDS);
            } catch (Throwable t) {
                logger.error("Error running client example: {}", t.getMessage(), t);
                future.completeExceptionally(t);
            }
        } catch (Throwable t) {
            logger.error("Error getting client: {}", t.getMessage(), t);

            future.completeExceptionally(t);

            try {
                Thread.sleep(1000);
                System.exit(0);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

//        try {
//            Thread.sleep(999_999_999);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
    }

}
