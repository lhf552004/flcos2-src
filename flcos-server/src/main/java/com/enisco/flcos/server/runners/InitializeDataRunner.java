package com.enisco.flcos.server.runners;

import com.enisco.flcos.server.api.UsersController;
import com.enisco.flcos.server.entities.scheme.SchemeEntity;
import com.enisco.flcos.server.entities.scheme.SchemeFieldEntity;
import com.enisco.flcos.server.repository.postgresql.SchemeFieldRepository;
import com.enisco.flcos.server.repository.postgresql.SchemeRepository;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class InitializeDataRunner implements CommandLineRunner {
    Logger logger = LoggerFactory.getLogger(InitializeDataRunner.class);

    @Autowired
    SchemeRepository schemeRepository;

    @Autowired
    SchemeFieldRepository schemeFieldRepository;

    @Override
    public void run(String ...args) {
        logger.info("Start to run initialize data runner...");
        createOrderScheme();
    }

    private void createOrderScheme() {
        var booleanSchemeOptional = schemeRepository.findBySchemeName("boolean");
        if(booleanSchemeOptional.isEmpty()) {
            var booleanScheme = new SchemeEntity();
            booleanScheme.setSchemeName("boolean");
            booleanScheme.setBuiltin(true);
            booleanScheme.setPrimitiv(true);
            RepositoryUtil.create(schemeRepository, booleanScheme);
            booleanSchemeOptional = Optional.of(booleanScheme);
        }
        var byteSchemeOptional = schemeRepository.findBySchemeName("byte");
        if(byteSchemeOptional.isEmpty()) {
            var byteScheme = new SchemeEntity();
            byteScheme.setSchemeName("byte");
            byteScheme.setBuiltin(true);
            byteScheme.setPrimitiv(true);
            RepositoryUtil.create(schemeRepository, byteScheme);
            byteSchemeOptional = Optional.of(byteScheme);
        }
        var intSchemeOptional = schemeRepository.findBySchemeName("int");
        if(intSchemeOptional.isEmpty()) {
            var intScheme = new SchemeEntity();
            intScheme.setSchemeName("int");
            intScheme.setBuiltin(true);
            intScheme.setPrimitiv(true);
            RepositoryUtil.create(schemeRepository, intScheme);
            intSchemeOptional = Optional.of(intScheme);
        }
        var longSchemeOptional = schemeRepository.findBySchemeName("long");
        if(longSchemeOptional.isEmpty()) {
            var longScheme = new SchemeEntity();
            longScheme.setSchemeName("long");
            longScheme.setBuiltin(true);
            longScheme.setPrimitiv(true);
            RepositoryUtil.create(schemeRepository, longScheme);
            longSchemeOptional = Optional.of(longScheme);
        }
        var doubleSchemeOptional = schemeRepository.findBySchemeName("double");
        if(doubleSchemeOptional.isEmpty()) {
            var doubleScheme = new SchemeEntity();
            doubleScheme.setSchemeName("double");
            doubleScheme.setBuiltin(true);
            doubleScheme.setPrimitiv(true);
            RepositoryUtil.create(schemeRepository, doubleScheme);
            doubleSchemeOptional = Optional.of(doubleScheme);
        }
        var timeSchemeOptional = schemeRepository.findBySchemeName("time");
        if(timeSchemeOptional.isEmpty()) {
            var timeScheme = new SchemeEntity();
            timeScheme.setSchemeName("time");
            timeScheme.setBuiltin(true);
            timeScheme.setPrimitiv(true);
            RepositoryUtil.create(schemeRepository, timeScheme);
            timeSchemeOptional = Optional.of(timeScheme);
        }

        var stringSchemeOptional = schemeRepository.findBySchemeName("string");
        if(stringSchemeOptional.isEmpty()) {
            var stringScheme = new SchemeEntity();
            stringScheme.setSchemeName("string");
            stringScheme.setBuiltin(true);
            stringScheme.setPrimitiv(true);
            RepositoryUtil.create(schemeRepository, stringScheme);
            stringSchemeOptional = Optional.of(stringScheme);
        }

        var durationSchemeOptional = schemeRepository.findBySchemeName("duration");
        if(durationSchemeOptional.isEmpty()) {
            var durationEntity = new SchemeEntity();
            durationEntity.setSchemeName("duration");
            durationEntity.setBuiltin(true);
            durationEntity.setPrimitiv(true);
            RepositoryUtil.create(schemeRepository, durationEntity);
            durationSchemeOptional = Optional.of(durationEntity);
        }
        var emptySchemeOptional = schemeRepository.findBySchemeName("empty");
        if(emptySchemeOptional.isEmpty()) {
            var emptyEntity = new SchemeEntity();
            emptyEntity.setSchemeName("empty");
            emptyEntity.setBuiltin(true);
            emptyEntity.setPrimitiv(true);
            RepositoryUtil.create(schemeRepository, emptyEntity);
            emptySchemeOptional = Optional.of(emptyEntity);
        }
        var orderSchemeOptional = schemeRepository.findBySchemeName("Order_Scheme");
        if(orderSchemeOptional.isEmpty()) {
            var orderSchemeEntity = new SchemeEntity();
            orderSchemeEntity.setSchemeName("Order_Scheme");
            orderSchemeEntity.setBuiltin(true);
            orderSchemeEntity.setPrimitiv(false);
            RepositoryUtil.create(schemeRepository, orderSchemeEntity);
            orderSchemeOptional = Optional.of(orderSchemeEntity);
        }

        var erpBodyDataSchemeOptional = schemeRepository.findBySchemeName("ERP_Body_Data");
        if(erpBodyDataSchemeOptional.isEmpty()) {
            var erpBodyDataSchemeEntity = new SchemeEntity();
            erpBodyDataSchemeEntity.setSchemeName("ERP_Body_Data");
            erpBodyDataSchemeEntity.setBuiltin(true);
            erpBodyDataSchemeEntity.setPrimitiv(false);
            RepositoryUtil.create(schemeRepository, erpBodyDataSchemeEntity);
            erpBodyDataSchemeOptional = Optional.of(erpBodyDataSchemeEntity);
        }

        var erpBodyDataSchemeFieldOptional = schemeFieldRepository.findByFieldName("erp_body_data");
        if(erpBodyDataSchemeFieldOptional.isEmpty()) {
            var erpBodyDataSchemeFieldEntity = new SchemeFieldEntity();
            erpBodyDataSchemeFieldEntity.setSchemeType(erpBodyDataSchemeOptional.get());
            erpBodyDataSchemeFieldEntity.setFieldName("erp_body_data");
            erpBodyDataSchemeFieldEntity.setSchemeParent(orderSchemeOptional.get());
            erpBodyDataSchemeFieldEntity.setPosition(8);
            RepositoryUtil.create(schemeFieldRepository, erpBodyDataSchemeFieldEntity);
            erpBodyDataSchemeFieldOptional = Optional.of(erpBodyDataSchemeFieldEntity);
        }

        var vinSchemeFieldOptional = schemeFieldRepository.findByFieldName("VIN");
        if(vinSchemeFieldOptional.isEmpty()) {
            var vinSchemeFieldEntity = new SchemeFieldEntity();
            vinSchemeFieldEntity.setSchemeType(stringSchemeOptional.get());
            vinSchemeFieldEntity.setFieldName("VIN");
            vinSchemeFieldEntity.setSchemeParent(erpBodyDataSchemeOptional.get());
            vinSchemeFieldEntity.setPosition(2);
            RepositoryUtil.create(schemeFieldRepository, vinSchemeFieldEntity);
            vinSchemeFieldOptional = Optional.of(vinSchemeFieldEntity);
        }

        var roofWSchemeFieldOptional = schemeFieldRepository.findByFieldName("RoofW");
        if(roofWSchemeFieldOptional.isEmpty()) {
            var roofWSchemeFieldEntity = new SchemeFieldEntity();
            roofWSchemeFieldEntity.setSchemeType(stringSchemeOptional.get());
            roofWSchemeFieldEntity.setFieldName("RoofW");
            roofWSchemeFieldEntity.setSchemeParent(erpBodyDataSchemeOptional.get());
            roofWSchemeFieldEntity.setPosition(14);
            RepositoryUtil.create(schemeFieldRepository, roofWSchemeFieldEntity);
            roofWSchemeFieldOptional = Optional.of(roofWSchemeFieldEntity);
        }

        var bodyTypeSchemeFieldOptional = schemeFieldRepository.findByFieldName("BodyType");
        if(bodyTypeSchemeFieldOptional.isEmpty()) {
            var bodyTypeSchemeFieldEntity = new SchemeFieldEntity();
            bodyTypeSchemeFieldEntity.setSchemeType(stringSchemeOptional.get());
            bodyTypeSchemeFieldEntity.setFieldName("BodyType");
            bodyTypeSchemeFieldEntity.setSchemeParent(erpBodyDataSchemeOptional.get());
            bodyTypeSchemeFieldEntity.setPosition(14);
            RepositoryUtil.create(schemeFieldRepository, bodyTypeSchemeFieldEntity);
            bodyTypeSchemeFieldOptional = Optional.of(bodyTypeSchemeFieldEntity);
        }

    }
}
