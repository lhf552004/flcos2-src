package com.enisco.flcos.server.entities.enums;

import com.enisco.flcos.server.exceptions.SchemeException;

import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.Instant;
import java.time.format.DateTimeParseException;
import java.util.*;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public enum SchemeType {
    BOOL(Boolean.class, SchemeType::boolean2String, SchemeType::emptyDouble, SchemeType::emptyTime, SchemeType::parseBoolean, SchemeType::convertToBoolean, SchemeType::booleanMatcher, SchemeType::integerToString, SchemeType::parseToBoolean),
    BYTE(Byte.class, SchemeType::emptyString, SchemeType::number2Double, SchemeType::emptyTime, SchemeType::parseByte, (value) -> {
        return convertToNumberType(value, -128.0D, 127.0D, "byteValue", Byte.class);
    }, SchemeType::defaultMatcher, SchemeType::integerToString, SchemeType::parseToNumber),
    INT(Integer.class, SchemeType::emptyString, SchemeType::number2Double, SchemeType::emptyTime, SchemeType::parseInt, (value) -> {
        return convertToNumberType(value, -2.147483648E9D, 2.147483647E9D, "intValue", Integer.class);
    }, SchemeType::defaultMatcher, SchemeType::integerToString, SchemeType::parseToNumber),
    LONG(Long.class, SchemeType::emptyString, SchemeType::number2Double, SchemeType::emptyTime, SchemeType::parseLong, (value) -> {
        return convertToNumberType(value, -9.223372036854776E18D, 9.223372036854776E18D, "longValue", Long.class);
    }, SchemeType::defaultMatcher, SchemeType::integerToString, SchemeType::parseToNumber),
    FLOAT(Float.class, SchemeType::emptyString, SchemeType::number2Double, SchemeType::emptyTime, SchemeType::parseFloat, (value) -> {
        return convertToNumberType(value, -3.4028234663852886E38D, 3.4028234663852886E38D, "floatValue", Float.class);
    }, SchemeType::defaultMatcher, SchemeType::realToString, SchemeType::parseToNumber),
    DOUBLE(Double.class, SchemeType::emptyString, SchemeType::number2Double, SchemeType::emptyTime, SchemeType::parseDouble, (value) -> {
        return convertToNumberType(value, -1.7976931348623157E308D, 1.7976931348623157E308D, "doubleValue", Double.class);
    }, SchemeType::defaultMatcher, SchemeType::realToString, SchemeType::parseToNumber),
    TIME(Date.class, SchemeType::emptyString, SchemeType::emptyDouble, SchemeType::time2time, SchemeType::parseTime, SchemeType::convertToDate, SchemeType::defaultMatcher, SchemeType::timeToString, SchemeType::parseToTime),
    STRING(String.class, SchemeType::string2String, SchemeType::emptyDouble, SchemeType::emptyTime, SchemeType::parseString, SchemeType::convertToString, SchemeType::defaultMatcher, SchemeType::objectToString, SchemeType::parseToString),
    ARRAY(List.class, SchemeType::emptyString, SchemeType::list2Double, SchemeType::emptyTime, SchemeType::parseList, SchemeType::convertToNull, SchemeType::defaultMatcher, SchemeType::objectToString, SchemeType::parseToNull),
    STRUCT(Map.class, SchemeType::emptyString, SchemeType::emptyDouble, SchemeType::emptyTime, SchemeType::parseMap, SchemeType::convertToNull, SchemeType::defaultMatcher, SchemeType::objectToString, SchemeType::parseToNull),
    DURATION(Duration.class, SchemeType::emptyString, SchemeType::duration2Number, SchemeType::emptyTime, SchemeType::parseDuration, SchemeType::convertToDuration, SchemeType::defaultMatcher, SchemeType::durationToString, SchemeType::parseToDuration);

    private final String fieldName;
    private final String sqlFieldName;
    private final Class<?> clazz;
    private final Function<Object, String> stringFunction;
    private final Function<Object, Double> numericFunction;
    private final Function<Object, Date> timeFunction;
    private final SchemeType.ObjectFunction objectFunction;
    private final Function<Object, Object> convertToFunction;
    private final SchemeType.MatchingFunction matchingFunction;
    private final BiFunction<Locale, Object, String> toStringFunction;
    private final BiFunction<Locale, String, Object> parseStringFunction;
    private static final Pattern DURATION_PATTERN = Pattern.compile("(\\d+) (\\d+):(\\d+):(\\d+)");
    public static final String TIME_FORMAT = "yyyy-MM-dd HH:mm:ss";
    public static final String NULL = "null";
    private static final String SQL_FIELD_STRING = "STRING_VALUE";
    private static final String SQL_FIELD_TIME = "TIME_VALUE";
    private static final String SQL_FIELD_NUMBER = "NUMERIC_VALUE";

    private SchemeType(Class<?> clazz, Function<Object, String> stringFunction, Function<Object, Double> numericFunction, Function<Object, Date> timeFunction, SchemeType.ObjectFunction objectFunction, Function<Object, Object> convertToFunction, SchemeType.MatchingFunction matchingFunction, BiFunction<Locale, Object, String> toStringFunction, BiFunction<Locale, String, Object> parseStringFunction) {
        this.clazz = clazz;
        this.stringFunction = stringFunction;
        this.numericFunction = numericFunction;
        this.timeFunction = timeFunction;
        this.objectFunction = objectFunction;
        this.convertToFunction = convertToFunction;
        this.matchingFunction = matchingFunction;
        this.toStringFunction = toStringFunction;
        this.parseStringFunction = parseStringFunction;
        if (!String.class.isAssignableFrom(clazz) && !Boolean.class.isAssignableFrom(clazz)) {
            if (!List.class.isAssignableFrom(clazz) && !Map.class.isAssignableFrom(clazz)) {
                if (Date.class.isAssignableFrom(clazz)) {
                    this.fieldName = "timeValue";
                    this.sqlFieldName = "TIME_VALUE";
                } else {
                    this.fieldName = "numericValue";
                    this.sqlFieldName = "NUMERIC_VALUE";
                }
            } else {
                this.fieldName = null;
                this.sqlFieldName = null;
            }
        } else {
            this.fieldName = "stringValue";
            this.sqlFieldName = "STRING_VALUE";
        }

    }

    public static SchemeType valueOf(Object value) {
        if (value == null) {
            return STRING;
        } else if (value instanceof List) {
            return ARRAY;
        } else if (value instanceof Map) {
            return STRUCT;
        } else {
            return value instanceof BigDecimal ? DOUBLE : (SchemeType) Arrays.stream(values()).filter((t) -> {
                return value.getClass().equals(t.clazz);
            }).findFirst().orElseThrow(() -> {
                return new SchemeException("Unsupported data type [" + value.getClass().getName() + "]!");
            });
        }
    }

    public String stringValue(Object value) {
        return value == null ? null : (String)this.stringFunction.apply(value);
    }

    public Double numericValue(Object value) {
        return value == null ? null : (Double)this.numericFunction.apply(value);
    }

    public Object convertTo(Object value) {
        return this.clazz.isInstance(value) ? value : this.convertToFunction.apply(value);
    }

    public Object objValue(String stringValue, Double numericValue, Date timeValue) {
        return this.objectFunction.apply(stringValue, numericValue, timeValue);
    }

    public static SchemeType bestMatchFor(Object value1, Object value2) {
        if (LONG.convertTo(value1) != null && LONG.convertTo(value2) != null) {
            return LONG;
        } else {
            return DOUBLE.convertTo(value1) != null && DOUBLE.convertTo(value2) != null ? DOUBLE : STRING;
        }
    }

    public String fieldName() {
        return this.fieldName;
    }

    public String getSqlFieldName() {
        return this.sqlFieldName;
    }

    private static Object parseMap(String stringValue, Double numericValue, Date timeValue) {
        return new HashMap();
    }

    private static Double list2Double(Object o) {
        return Integer.valueOf(((List)o).size()).doubleValue();
    }

    private static Object parseList(String stringValue, Double numericValue, Date timeValue) {
        return new ArrayList();
    }

    private static String emptyString(Object o) {
        return null;
    }

    private static Date emptyTime(Object o) {
        return null;
    }

    private static Object parseString(String stringValue, Double numericValue, Date timeValue) {
        return stringValue;
    }

    private static Double emptyDouble(Object obj) {
        return null;
    }

    private static String string2String(Object obj) {
        return (String)obj;
    }

    private static String boolean2String(Object obj) {
        if (obj != null && obj instanceof Boolean) {
            return (Boolean)obj ? "1" : "0";
        } else {
            return null;
        }
    }

    private static Date time2time(Object obj) {
        return (Date)obj;
    }

    private static Object parseTime(String stringValue, Double numericValue, Date timeValue) {
        return timeValue;
    }

    private static Object parseDouble(String stringValue, Double numericValue, Date timeValue) {
        return numericValue;
    }

    private static Object parseFloat(String stringValue, Double numericValue, Date timeValue) {
        return numericValue == null ? null : numericValue.floatValue();
    }

    private static Object parseLong(String stringValue, Double numericValue, Date timeValue) {
        return numericValue == null ? null : numericValue.longValue();
    }

    private static Object parseInt(String stringValue, Double numericValue, Date timeValue) {
        return numericValue == null ? null : numericValue.intValue();
    }

    private static Object parseByte(String stringValue, Double numericValue, Date timeValue) {
        return numericValue == null ? null : numericValue.byteValue();
    }

    private static Double number2Double(Object obj) {
        return obj instanceof BigDecimal ? ((BigDecimal)obj).doubleValue() : ((Number)obj).doubleValue();
    }

    private static Object parseBoolean(String stringValue, Double numericValue, Date timeValue) {
        return stringValue == null ? null : !"0".equalsIgnoreCase(stringValue) && !"false".equalsIgnoreCase(stringValue);
    }

    private static Boolean convertToBoolean(Object value) {
        if (value instanceof Boolean) {
            return (Boolean)value;
        } else {
            if (value instanceof String) {
                if ("1".equalsIgnoreCase((String)value) || "true".equalsIgnoreCase((String)value)) {
                    return true;
                }

                if ("0".equalsIgnoreCase((String)value) || "false".equalsIgnoreCase((String)value)) {
                    return false;
                }
            }

            if (value instanceof Number) {
                if (((Number)value).intValue() == 0) {
                    return false;
                }

                if (((Number)value).intValue() == 1) {
                    return true;
                }
            }

            return null;
        }
    }

    private static Object convertToDate(Object value) {
        if (value instanceof Number && ((Number)value).doubleValue() % 1.0D == 0.0D) {
            return new Date(((Number)value).longValue());
        } else {
            if (value instanceof String) {
                try {
                    return Date.from(Instant.parse((String)value));
                } catch (DateTimeParseException var3) {
                    try {
                        Double parseDouble = Double.parseDouble((String)value);
                        if (parseDouble % 1.0D == 0.0D && parseDouble <= 9.223372036854776E18D) {
                            return new Date(parseDouble.longValue());
                        }
                    } catch (NumberFormatException var2) {
                        return null;
                    }
                }
            }

            return null;
        }
    }

    private static Object convertToString(Object value) {
        if (value instanceof Number) {
            return String.valueOf(value);
        } else if (value instanceof Date) {
            return ((Date)value).toInstant().toString();
        } else {
            return value == null ? null : value.toString();
        }
    }

    private static Object convertToNull(Object value) {
        return null;
    }

    private static Number convertToNumberType(Object value, double minValue, double maxValue, String methodName, Class<? extends Number> clz) {
        Number toCheck = null;
        if (value instanceof Boolean) {
            toCheck = (Boolean)value ? 1 : 0;
        } else if (value instanceof Duration) {
            toCheck = ((Duration)value).getSeconds();
        } else if (value instanceof Enum) {
            toCheck = ((Enum)value).ordinal();
        }

        if (value instanceof String) {
            if (((String)value).equalsIgnoreCase(Boolean.TRUE.toString())) {
                toCheck = 1;
            } else if (((String)value).equalsIgnoreCase(Boolean.FALSE.toString())) {
                toCheck = 0;
            } else {
                try {
                    toCheck = Double.parseDouble((String)value);
                } catch (NumberFormatException var9) {
                    return null;
                }
            }
        } else if (value instanceof Number) {
            toCheck = (Number)value;
        } else if (value instanceof Date && clz == Long.class) {
            toCheck = ((Date)value).getTime();
        }

        return convertAndCheckNumber(minValue, maxValue, methodName, (Number)toCheck);
    }

    private static Number convertAndCheckNumber(double minValue, double maxValue, String methodName, Number number) {
        if (!(number instanceof BigDecimal) || ((BigDecimal)number).compareTo(getValueAsBigDecimal(maxValue)) <= -1 && ((BigDecimal)number).compareTo(getValueAsBigDecimal(minValue)) >= 1) {
            if (number instanceof BigInteger) {
                BigDecimal bigDecimal = new BigDecimal((BigInteger)number);
                if (bigDecimal.compareTo(getValueAsBigDecimal(maxValue)) > -1 || bigDecimal.compareTo(getValueAsBigDecimal(minValue)) < 1) {
                    return null;
                }
            }

            if (number != null && minValue <= number.doubleValue() && number.doubleValue() <= maxValue) {
                try {
                    Number castedNumber = (Number)Number.class.getMethod(methodName).invoke(number);
                    if (castedNumber instanceof Double || castedNumber instanceof Float || number.doubleValue() % 1.0D == 0.0D) {
                        return castedNumber;
                    }
                } catch (InvocationTargetException | NoSuchMethodException | IllegalAccessException var7) {
                    return null;
                }
            }

            return null;
        } else {
            return null;
        }
    }

    private static BigDecimal getValueAsBigDecimal(double value) {
        return value != 9.223372036854776E18D && value != -9.223372036854776E18D ? BigDecimal.valueOf(value) : new BigDecimal((long)value);
    }

    public Date timeValue(Object value) {
        return value == null ? null : (Date)this.timeFunction.apply(value);
    }

    public boolean isMatching(Object value1, Object value2) {
        return this.matchingFunction.apply(this, value1, value2);
    }

    public Object toSqlValue(Object value) {
        if (this == BOOL) {
            Boolean asBoolean = (Boolean)this.convertTo(value);
            if (asBoolean == null) {
                return null;
            } else {
                return asBoolean ? "1" : "0";
            }
        } else if ("STRING_VALUE".equals(this.sqlFieldName)) {
            return STRING.convertTo(value);
        } else if ("TIME_VALUE".equals(this.sqlFieldName)) {
            return TIME.convertTo(value);
        } else {
            return "NUMERIC_VALUE".equals(this.sqlFieldName) ? DOUBLE.convertTo(value) : null;
        }
    }

    private static boolean defaultMatcher(SchemeType schemeType, Object value1, Object value2) {
        return Objects.equals(schemeType.convertTo(value1), schemeType.convertTo(value2));
    }

    private static boolean booleanMatcher(SchemeType schemeType, Object value1, Object value2) {
        Boolean bool1 = (Boolean)BOOL.convertTo(value1);
        Boolean bool2 = (Boolean)BOOL.convertTo(value2);
        if (bool1 != null) {
            if (bool2 == null) {
                return !bool1;
            } else {
                return bool1.equals(bool2);
            }
        } else {
            return bool2 == null || !bool2;
        }
    }

    public static int comparator(Object obj1, Object obj2) {
        if (obj1 == null) {
            return obj2 == null ? 0 : -1;
        } else if (obj2 == null) {
            return 1;
        } else {
            SchemeType type = bestMatchFor(obj1, obj2);
            Object converted1 = type.convertTo(obj1);
            Object converted2 = type.convertTo(obj2);
            return converted1 instanceof Comparable ? ((Comparable)converted1).compareTo(converted2) : 0;
        }
    }

    public String toString(Locale locale, Object value) {
        return (String)this.toStringFunction.apply(locale, value);
    }

    public Object parseString(Locale locale, String value) {
        return this.convertTo(this.parseStringFunction.apply(locale, value));
    }

    private static String integerToString(Locale locale, Object value) {
        return String.format(locale, "%d", (Long)LONG.convertTo(value));
    }

    private static String realToString(Locale locale, Object value) {
        return String.format(locale, "%f", DOUBLE.convertTo(value));
    }

    private static String objectToString(Locale locale, Object value) {
        return String.format(locale, "%s", value);
    }

    private static String durationToString(Locale locale, Object value) {
        Duration duration = (Duration)DURATION.convertTo(value);
        if (duration == null) {
            return String.format(locale, "%s", (Object[])null);
        } else {
            long remaining = duration.getSeconds();
            long daysPart = remaining / 86400L;
            remaining %= 86400L;
            long hoursPart = remaining / 3600L;
            remaining %= 3600L;
            long minutesPart = remaining / 60L;
            long secondsPart = remaining % 60L;
            return String.format(locale, "%d %02d:%02d:%02d", daysPart, hoursPart, minutesPart, secondsPart);
        }
    }

    private static String timeToString(Locale locale, Object value) {
        return value == null ? "null" : (new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")).format(TIME.convertTo(value));
    }

    private static Object parseToBoolean(Locale locale, String value) {
        return convertToBoolean(value);
    }

    private static Object parseToNumber(Locale locale, String value) {
        if ("null".equals(value)) {
            return null;
        } else {
            try {
                return NumberFormat.getInstance(locale).parse(value);
            } catch (ParseException var3) {
                throw new IllegalArgumentException("Invalid number [" + value + "]: ", var3);
            }
        }
    }

    private static Object parseToString(Locale locale, String value) {
        return value;
    }

    private static Object parseToNull(Locale locale, String value) {
        return null;
    }

    private static Object parseToDuration(Locale locale, String value) {
        if ("null".equals(value)) {
            return null;
        } else {
            Matcher matcher = DURATION_PATTERN.matcher(value);
            if (matcher.find()) {
                Long result = Long.parseLong(matcher.group(1)) * 3600L * 24L;
                result = result + Long.parseLong(matcher.group(2)) * 3600L;
                result = result + Long.parseLong(matcher.group(3)) * 60L;
                result = result + Long.parseLong(matcher.group(4));
                return Duration.ofSeconds(result);
            } else {
                try {
                    return Duration.parse(value);
                } catch (Exception var4) {
                    throw new IllegalArgumentException("Invalid duration string [" + value + "]!");
                }
            }
        }
    }

    private static Object parseToTime(Locale locale, String value) {
        if ("null".equals(value)) {
            return null;
        } else {
            try {
                return (new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")).parse(value);
            } catch (ParseException var3) {
                throw new IllegalArgumentException(String.format("Invalid time string [%s], expected format: [%s]", value, "yyyy-MM-dd HH:mm:ss"), var3);
            }
        }
    }

    private static Object convertToDuration(Object value) {
        if (value == null) {
            return null;
        } else if (value instanceof Duration) {
            return value;
        } else {
            Long longValue = (Long)LONG.convertTo(value);
            if (longValue != null) {
                return Duration.ofSeconds(longValue);
            } else {
                if (value instanceof String) {
                    try {
                        return DURATION.parseString(Locale.getDefault(), (String)value);
                    } catch (IllegalArgumentException var3) {
                    }
                }

                return null;
            }
        }
    }

    private static Object parseDuration(String stringValue, Double numberValue, Date timeValue) {
        return convertToDuration(numberValue);
    }

    private static Double duration2Number(Object duration) {
        if (duration == null) {
            return null;
        } else {
            Long seconds = ((Duration)duration).getSeconds();
            return seconds.doubleValue();
        }
    }

    interface ObjectFunction {
        Object apply(String var1, Double var2, Date var3);
    }

    private interface MatchingFunction {
        boolean apply(SchemeType var1, Object var2, Object var3);
    }
}
