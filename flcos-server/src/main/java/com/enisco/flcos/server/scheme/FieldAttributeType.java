package com.enisco.flcos.server.scheme;

import javax.xml.bind.annotation.XmlEnum;
import java.util.function.BiPredicate;
import java.util.function.Function;
import java.util.regex.Pattern;

@XmlEnum
public enum FieldAttributeType {
    NONE(FieldAttributeType::alwaysTrue, FieldAttributeType::noConvertion),
    RANGE(FieldAttributeType::rangeValidation, FieldAttributeType::noConvertion),
    REGEX(FieldAttributeType::regexValidation, FieldAttributeType::noConvertion),
    LENGTH(FieldAttributeType::lengthValidation, FieldAttributeType::toLongConvertion),
    FULL(FieldAttributeType::alwaysTrue, FieldAttributeType::noConvertion),
    MINUTES(FieldAttributeType::alwaysTrue, FieldAttributeType::noConvertion),
    SECONDS(FieldAttributeType::alwaysTrue, FieldAttributeType::noConvertion),
    UNIQUE(FieldAttributeType::alwaysTrue, FieldAttributeType::noConvertion),
    LOOKUP(FieldAttributeType::alwaysTrue, FieldAttributeType::noConvertion),
    NOT_NULL(FieldAttributeType::nonNull, FieldAttributeType::noConvertion);

    private BiPredicate<FieldAttribute, Object> predicate;
    private Function<String, Object> valueConverter;

    private FieldAttributeType(BiPredicate<FieldAttribute, Object> predicate, Function<String, Object> valueConverter) {
        this.predicate = predicate;
        this.valueConverter = valueConverter;
    }

    public boolean validate(FieldAttribute attribute, Object value) {
        return this.predicate.test(attribute, value);
    }

    public Object convertValue(String value) {
        return this.valueConverter.apply(value);
    }

    private static Object noConvertion(String value) {
        return value;
    }

    private static Object toLongConvertion(String value) {
        try {
            return Long.parseLong(value);
        } catch (NumberFormatException var2) {
            return value;
        }
    }

    private static boolean alwaysTrue(FieldAttribute attribute, Object value) {
        return true;
    }

    private static boolean rangeValidation(FieldAttribute attribute, Object value) {
        if (!(value instanceof Number)) {
            return false;
        } else {
            Number length = (Number)value;
            return attribute.getMinValue() <= length.doubleValue() && length.doubleValue() <= attribute.getMaxValue();
        }
    }

    private static boolean nonNull(FieldAttribute attribute, Object o) {
        return o != null;
    }

    private static boolean lengthValidation(FieldAttribute attribute, Object value) {
        if (value instanceof String) {
            try {
                Number maxLength = (Number)attribute.getValue();
                return ((String)value).length() <= maxLength.intValue();
            } catch (ClassCastException var3) {
                return false;
            }
        } else {
            return false;
        }
    }

    private static boolean regexValidation(FieldAttribute attribute, Object serializable) {
        Pattern compile = Pattern.compile(attribute.getValue().toString());
        return serializable instanceof String ? compile.matcher((String)serializable).matches() : false;
    }
}
