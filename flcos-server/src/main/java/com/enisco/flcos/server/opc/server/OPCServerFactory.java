package com.enisco.flcos.server.opc.server;

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
import java.util.ArrayList;
import java.util.List;

@Component
public class OPCServerFactory {

    private List<FLCosOPCServer> opcServers = new ArrayList<>();

    public List<FLCosOPCServer> getOpcServers() {
        return opcServers;
    }

    public void loadAllOPCServers(List<Path> OPCConfigPaths) {
        opcServers.clear();
        OPCConfigPaths.forEach(modFolderPath-> {
            try {
                loadOPCServer(modFolderPath);
            } catch (Exception exception) {
                exception.printStackTrace();
            }
        });
    }

    private void loadOPCServer(Path modFolderPath) throws Exception {
        var modules = loadModules(modFolderPath);
        FLCosOPCServer server = new FLCosOPCServer(modules);
        server.startup().get();
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
            System.out.println(modFile);
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
            System.out.println(emesModule);
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
