package com.enisco.flcos.server.scheme;

import com.enisco.flcos.server.entities.enums.SchemeType;
import com.enisco.flcos.server.entities.scheme.SchemeEntity;
import com.enisco.flcos.server.entities.scheme.SchemeFieldAttribute;
import com.enisco.flcos.server.entities.scheme.SchemeFieldEntity;
import com.enisco.flcos.server.repository.relational.SchemeFieldAttributeRepository;
import com.enisco.flcos.server.repository.relational.SchemeFieldRepository;
import com.enisco.flcos.server.repository.relational.SchemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component
public class SchemeManagerBean implements SchemeManager {
    private static final Logger LOGGER = Logger.getLogger(SchemeManagerBean.class.getName());
    private static final String PARAM = "param";

    @Autowired
    SchemeRepository schemeRepository;

    @Autowired
    SchemeFieldRepository schemeFieldRepository;

    @Autowired
    SchemeFieldAttributeRepository schemeFieldAttributeRepository;

    @EJB
    SchemeListenerRegistrations registrations;
//    @EJB
//    SchemeChangeManager changeManager;

    InitialContext initialContext;

    public SchemeManagerBean() {
    }

    @PostConstruct
    public void createInitialContext() {
        try {
            this.initialContext = new InitialContext();
        } catch (NamingException e) {
            LOGGER.log(Level.WARNING, "Failed creating InitialContext", e);
        }
    }

    @Override
    public Scheme getScheme(String schemeName) {
        return findScheme(schemeName).map(this::transform)
                .orElse(null);
    }

    @Override
    public Scheme getScheme(Long id) {
        return schemeRepository.findById(id).map(this::transform).orElse(null);
    }

    public Scheme transform(SchemeEntity entity) {
        Scheme.Builder result = new Scheme.Builder().name(entity.getSchemeName())
                .description(entity.getDescription())
                .primitive(entity.isPrimitiv())
                .lastChange(LocalDateTime.ofInstant(entity.getLastModifiedDate().toInstant(),
                        ZoneId.systemDefault()));

        entity.getFields()
                .forEach(field -> result.field(createField(field, null)));

        return result.build();
    }

    private static Field createSubField(SchemeFieldEntity field, String parentName, Field.Builder parentBuilder) {
        String fullName = getFullName(parentName, field.getFieldName());
        Field.Builder result = new Field.Builder().name(field.getFieldName())
                .fullName(fullName)
                .scheme(field.getSchemeType()
                        .getSchemeName())
                .description(field.getDescription())
                .unit(field.getUnit())
                .parent(parentName)
                .fieldSize(extractFieldSize(field))
                .arraySize(field.getArraySize());

        field.getAttributes()
                .stream()
                .map(SchemeManagerBean::createAttribute)
                .forEach(result::attribute);

        if ( field.isArray() )
        {
            result.type(SchemeType.ARRAY);
//            IntStream.range(0, field.getArraySize())
//                    .forEach(i -> result.field(createArrayEntry(i, field, fullName)));
        }
        else
        {
            processFieldType(field, fullName, result);
        }
//        field.getFields().stream().forEach(subField -> createSubField(subField, fullName, result));

        var newField = result.build();

        if (parentBuilder != null)
            parentBuilder.field(newField);

        return newField;

    }

    private static Field createField(SchemeFieldEntity field, String parent) {
        String fullName = getFullName(parent, field.getFieldName());
        Field.Builder result = new Field.Builder().name(field.getFieldName())
                .fullName(fullName)
                .scheme(field.getSchemeType()
                        .getSchemeName())
                .description(field.getDescription())
                .unit(field.getUnit())
                .parent(parent)
                .fieldSize(extractFieldSize(field))
                .arraySize(field.getArraySize());

        field.getAttributes()
                .stream()
                .map(SchemeManagerBean::createAttribute)
                .forEach(result::attribute);


//        var lookupEntity = field.getLookupEntity();
//        if ( lookupEntity != null )
//        {
//            Datasource.Builder builder = new Datasource.Builder().table(lookupEntity.getTable())
//                    .description(lookupEntity.getDescription())
//                    .value(lookupEntity.getValue())
//                    .sorting(lookupEntity.getSorting());
//            lookupEntity.getKeys()
//                    .entrySet()
//                    .forEach(entry -> builder.key(entry.getKey(), entry.getValue()));
//            result.datasource(builder.build());
//        }
//
        if ( field.isArray() )
        {
            result.type(SchemeType.ARRAY);
            IntStream.range(0, field.getArraySize())
                    .forEach(i -> result.field(createArrayEntry(i, field, fullName)));
        }
        else
        {
            processFieldType(field, fullName, result);
        }

        return result.build();
    }

    private static FieldAttribute createAttribute(SchemeFieldAttribute schemeFieldAttribute) {
        FieldAttribute.Builder result = new FieldAttribute.Builder();
        return result.type(schemeFieldAttribute.getAttribute())
                .value(schemeFieldAttribute.getValue())
                .maxValue(schemeFieldAttribute.getMaxValue())
                .minValue(schemeFieldAttribute.getMinValue())
                .build();
    }

    private static Integer extractFieldSize(SchemeFieldEntity field) {
        return field.getAttributes()
                .stream()
                .filter(a -> a.getAttribute() == FieldAttributeType.LENGTH)
                .map(SchemeFieldAttribute::getValue)
                .map(Integer::parseInt)
                .findFirst()
                .orElse(null);
    }

    private static Field createArrayEntry(int index, SchemeFieldEntity field, String parent) {
        String name = "[" + index + "]";
        String fullName = getFullName(parent, name);
        Field.Builder result = new Field.Builder().name(name)
                .fullName(fullName)
                .scheme(field.getSchemeType()
                        .getSchemeName())
                .parent(parent)
                .fieldSize(extractFieldSize(field))
                .unit(field.getUnit());
        processFieldType(field, fullName, result);
        if (field.getSchemeType()
                .isPrimitiv()) {
            field.getAttributes()
                    .stream()
                    .map(SchemeManagerBean::createAttribute)
                    .forEach(result::attribute);
        }
        return result.build();
    }

    private static void processFieldType(SchemeFieldEntity field, String fullName, Field.Builder result) {

        if (field.getSchemeType()
                .isPrimitiv()) {
            result.type(SchemeFieldType.getBySchemeType(field.getSchemeType()
                    .getSchemeName())
                    .toApi());
        } else {
            result.type(SchemeType.STRUCT);
            field.getSchemeType()
                    .getFields()
                    .forEach(f -> result.field(createField(f, fullName)));
        }
    }

    private static String getFullName(String parent, String fieldName) {
        if (parent == null) {
            return fieldName;
        }

        if (fieldName.startsWith("[")) {
            return parent + fieldName;
        }

        return parent + "." + fieldName;
    }

    private Optional<SchemeEntity> findScheme(String schemeName) {
        return schemeRepository.findBySchemeName(schemeName);
    }

    @Override
    public boolean exists(String schemeName) {
        return schemeRepository.existsBySchemeName(schemeName);
    }

    @Override
    public String[] getAllNames() {
        var array = schemeRepository.getAllNames(false);
        return array.toArray(new String[array.size()]);
    }

    @Override
    public SchemeValidationResponse validate(SchemeValidationRequest request) {
        SchemeValidationResponse response = new SchemeValidationResponse();
        Scheme scheme = getScheme(request.getName());

        response.setValidatedFields(request.getFields()
                .stream()
                .map(f -> validateField(scheme, f))
                .collect(Collectors.toList()));
        response.setSuccess(response.getValidatedFields()
                .stream()
                .allMatch(ValidatedField::isSuccess));
        return response;
    }

    @Override
    public void register(String name, String lookup) {
        try {
            SchemeListener listener = (SchemeListener) initialContext.lookup(lookup);
            registrations.addSchemeListener(name, listener);
        } catch (NamingException e) {
            throw new IllegalArgumentException(e);
        }
    }

    @Override
    public Map<String, List<String>> isInUsage(String schemeName) {
        Map<String, List<String>> appsThatUsesThatScheme = new HashMap<>();
        Map<String, SchemeListener> listeners = registrations.getSchemeListeners();
        for (Map.Entry<String, SchemeListener> entry : listeners.entrySet()) {
            List<String> usedIn = entry.getValue()
                    .isUsedIn(schemeName);

            if (!usedIn.isEmpty()) {
                appsThatUsesThatScheme.put(entry.getKey(), usedIn);
            }
        }
        return appsThatUsesThatScheme;
    }

    private ValidatedField validateField(Scheme scheme, ValidationField field) {
        return scheme.getField(field.getName())
                .map(f -> validateFieldValue(f, field))
                .orElse(createFieldMissingValidatField(field, scheme.getName()));
    }

    private ValidatedField createFieldMissingValidatField(ValidationField field, String name) {
        ValidatedField valField = new ValidatedField();
        valField.setSuccess(false);
        valField.setMessage("Field [" + field.getName() + "] does not exists in scheme [" + name + "]");
        return valField;
    }

    private ValidatedField validateFieldValue(Field f, ValidationField field) {
        ValidatedField validatedField = new ValidatedField();
        validatedField.setName(field.getName());
        if (!f.isNotNull() && field.getValue() == null) {
            validatedField.setSuccess(true);
        } else if (f.isNotNull() && field.getValue() == null) {
            validatedField.setSuccess(false);
            validatedField.setMessage("Field [" + f.getFullName() + "] is marked as not null.");
        } else if (!f.isPrimitive()) {
            validatedField.setSuccess(false);
            validatedField.setMessage(
                    "Only primitive fields will be validate. [" + f.getFullName() + "] is not primitive.");
        } else if (f.getType()
                .convertTo(field.getValue()) != null) {

            Object convertedValue = f.getType()
                    .convertTo(field.getValue());
            if (f.getAttributes()
                    .stream()
                    .allMatch(attribute -> attribute.validateValue(convertedValue))) {
                validatedField.setSuccess(true);
            } else {
                validatedField.setSuccess(false);
                validatedField.setMessage(
                        "Value [" + field.getValue() + "] does not match all attributes for field [" + f.getFullName()
                                + "]");
            }
        } else {
            validatedField.setSuccess(false);
            validatedField.setMessage("Invalid value [" + field.getValue() + "] for data type [" + f.getType()
                    .name() + "]");
        }
        return validatedField;
    }

    @Override
    public void registerSchemeChangeListener(String app, String lookup, SchemeListenerState... schemes) {
//        if ( schemes.length == 0 )
//        {
//            throw new IllegalArgumentException("no schemesNames provided");
//        }
//        try
//        {
//            SchemeChangeListener listener = (SchemeChangeListener) initialContext.lookup(lookup);
//            changeManager.registerSchemeChangeListener(app, listener, schemes);
//        }
//        catch ( NamingException e )
//        {
//            throw new IllegalArgumentException(e);
//        }
    }

    @Override
    public void unRegisterSchemeChangeListener(String app) {
//        changeManager.removeSchemeChangeListener(app);
    }
}
