package com.enisco.flcos.server.opc.server;

import com.enisco.flcos.server.api.UsersController;
import com.enisco.flcos.server.entities.opc.OPCServerEntity;
import com.enisco.flcos.server.opc.AbstractOPCFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.xml.sax.*;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParserFactory;
import javax.xml.transform.sax.SAXSource;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@Component
public class OPCServerFactory extends AbstractOPCFactory {
    private static final Logger logger = LoggerFactory.getLogger(OPCServerFactory.class);
    private List<FLCosOPCServer> opcServers = new ArrayList<>();

    public Map<String, List<EmesModule>> getModulesMap() {
        return modulesMap;
    }

    private Map<String, List<EmesModule>> modulesMap = new HashMap<>();

    public List<FLCosOPCServer> getOpcServers() {
        return opcServers;
    }

    public List<String> getEndpointUrls() {
        return endpointUrls;
    }

    private List<String> endpointUrls = new ArrayList<>();


    public void loadAllOPCServers(List<OPCServerEntity> opcServerEntities) {
        opcServers.clear();
        opcServerEntities.forEach(opcServerEntity -> {
            try {
                var endpointUrl = "opc.tcp://" +
                        opcServerEntity.getAddress() + ":" +
                        opcServerEntity.getTcpPort() + "/" +
                        opcServerEntity.getName();
                endpointUrls.add(endpointUrl);
                if(opcServerEntity.isInternal()) {
                    var modFolderPath = Paths.get(opcServerEntity.getConfigPath());
                    if(Files.exists(modFolderPath)) {
                        loadOPCServer(opcServerEntity.getAddress(), opcServerEntity.getTcpPort(), opcServerEntity.getHttpsPort(), opcServerEntity.getName(), modFolderPath);
                    }
                }

            } catch (Exception exception) {
                exception.printStackTrace();
            }
        });
    }

    private void loadOPCServer(String address, int tcpPort, int httpsPort, String name, Path modFolderPath) throws Exception {
        var modules = loadModules(modFolderPath);
        FLCosOPCServer server = new FLCosOPCServer(address, tcpPort, httpsPort, name, modules);
        server.startup().get();
        modulesMap.put(server.getEndpointUrl(), modules);
        opcServers.add(server);
    }


}
