package com.enisco.flcos.opc.server.opc;

import com.enisco.flcos.opc.server.entities.OPCServerEntity;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class OPCServerFactory {
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

    private List<EmesModule> loadModules(Path modFolderPath) throws FLCosOPCException {
        List<EmesModule> modules = new ArrayList<>();
        if (!Files.exists(modFolderPath)) {
            throw new FLCosOPCException("Mod folder not existed: " + modFolderPath);
        }
        File[] files = modFolderPath.toFile().listFiles((dir, name) -> name.endsWith(".mod"));

        assert files != null;
        for (File modFile : files) {
            logger.info(modFile.toString());
            var emeModule = loadModule(modFile);
            if (emeModule != null)
                modules.add(emeModule);
        }
        return modules;
    }

    private EmesModule loadModule(File modFile) {

        try {
            JAXBContext jaxbContext = JAXBContext.newInstance(EmesModule.class);
            InputStream newInStream = new FileInputStream(modFile);
            Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
            SAXParserFactory spf = SAXParserFactory.newInstance();
            spf.setFeature("http://apache.org/xml/features/nonvalidating/load-external-dtd", false);
            spf.setFeature("http://xml.org/sax/features/validation", false);
            XMLReader xmlReader = spf.newSAXParser()
                    .getXMLReader();
            InputSource inputSource = new InputSource(newInStream);
            SAXSource source = new SAXSource(xmlReader, inputSource);
            EmesModule emesModule = (EmesModule) jaxbUnmarshaller.unmarshal(source);

            newInStream.close();
            logger.info(emesModule.toString());
            return emesModule;
        } catch (JAXBException e) {
            e.printStackTrace();
        } catch (SAXNotSupportedException e) {
            e.printStackTrace();
        } catch (SAXNotRecognizedException e) {
            e.printStackTrace();
        } catch (ParserConfigurationException e) {
            e.printStackTrace();
        } catch (SAXException e) {
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {

        }
        return null;
    }
}
