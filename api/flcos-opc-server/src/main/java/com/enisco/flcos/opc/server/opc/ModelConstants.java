package com.enisco.flcos.opc.server.opc;

public final class ModelConstants
{
    public static final String ELEMENT_DATA_PROVIDER = "DataProvider";
    public static final String ELEMENT_OBJECT = "Object";
    public static final String ELEMENT_POLLING_GROUP = "PollingGroup";
    public static final String ELEMENT_FUNCTION = "Function";
    public static final String ELEMENT_REFERENCE = "Reference";
    public static final String ELEMENT_PROPERTY = "Property";
    public static final String ELEMENT_PARAMETER = "Parameter";
    public static final String ELEMENT_USES = "Uses";
    public static final String ELEMENT_VALUE = "Value";
    public static final String ELEMENT_SQLVALUE = "SqlValue";
    public static final String ELEMENT_CODE = "Code";
    public static final String ELEMENT_BINDING = "Binding";
    public static final String ELEMENT_MODULE = "Module";
    public static final String ELEMENT_ARCHIVER = "Archiver";
    public static final String ELEMENT_LISTENER = "Listener";
    public static final String ELEMENT_HANDSHAKE = "Handshakes";
    public static final String ELEMENT_KPI = "kpi";
    public static final String ELEMENT_KPI_VALUE = "kpi-values";
    public static final String ATTRIBUTE_CONNECT_STRING = "connectString";
    public static final String ATTRIBUTE_NAME = "name";
    public static final String ATTRIBUTE_CLASS = "class";
    public static final String ATTRIBUTE_JNDI_LOOKUP = "jndiLookup";
    public static final String ATTRIBUTE_TARGET = "target";
    public static final String ATTRIBUTE_ID = "id";
    public static final String ATTRIBUTE_LANGUAGE = "language";
    public static final String ATTRIBUTE_PERIOD = "period";
    public static final String ATTRIBUTE_ACTIVE = "active";
    public static final String ATTRIBUTE_TEMPLATE = "template";
    public static final String ATTRIBUTE_OVERRIDE = "override";
    public static final String ATTRIBUTE_TYPE = "type";
    public static final String ATTRIBUTE_EXTENDS = "extends";
    public static final String ATTRIBUTE_ADDRESS_MAPPER = "addressMapper";
    public static final String ATTRIBUTE_MAPPING = "mapping";
    public static final String PROPERTY_ACTIVE = "Active";
    public static final String PROPERTY_REPETITION = "Repetition";
    public static final String PROPERTY_START_INDEX = "StartIndex";
    public static final String PROPERTY_CREATED = "Created";
    public static final String PROPERTY_ADDRESS = "Address";
    public static final String PROPERTY_VALUE = "Value";
    public static final String PROPERTY_SQL_VALUE = "SqlValue";
    public static final String PROPERTY_LENGTH = "Length";
    public static final String PROPERTY_SPARE = "Spare";
    public static final String PROPERTY_INDEX = "Index";
    public static final String PROPERTY_IO_BLOCK = "IOBlock";
    public static final String PROPERTY_OFFSET = "Offset";
    public static final String PROPERTY_MEMORY_BLOCK = "MemoryArea";
    public static final String PROPERTY_BLOCK_OFFSET = "BlockOffset";
    public static final String PROPERTY_BIT_NUMBER = "BitNumber";
    public static final String PROPERTY_PLC_TAG_NAME = "PlcTag";
    public static final String PROPERTY_OPCUA_REGISTER_FLAG = "OpcUaNode";
    public static final String PROPERTY_STRUCTURE_MARKER = "Structure";
    public static final String PROPERTY_PACK_MODE_MARKER = "pack_mode";
    public static final String PROPERTY_PACK_MODE_SIZE = "pack_mode_size";

    public static final String XPATH_CHILD_PREFIX = "child::";

    public static final String ADDRESS_MAPPER_MODBUS = "ModbusBh";
    public static final String ADDRESS_MAPPER_OPC = "OPC";
    public static final String ADDRESS_MAPPER_ADS = "ADS";
    public static final String ADDRESS_MAPPER_SIMU = "SIMU";

    public static final String PROTOCOL_ID_S7C = "S7C";
    public static final String PROTOCOL_ID_S7 = "S7";
    public static final String PROTOCOL_ID_S7_JAVA = "S7J";
    public static final String PROTOCOL_ID_AB = "AB";
    public static final String PROTOCOL_ID_ADS = "ADS";
    public static final String PROTOCOL_ID_OPCUA = "OPCUA";
    public static final String PROTOCOL_ID_OPCUA_S7_1500 = "OPCUA_S7-1500";
    public static final String PROTOCOL_ID_SQL = "SQL";
    public static final String PROTOCOL_SYSTEM = "System";

    /**
     * When parsing a date time string java typically uses the default locale. This implies that all clients configuring the data model have to use exactly the same locale as the
     * server. Otherwise timestamps and dates may be parsed incorrectly or may not be parsable at all.
     * <p>
     * Beside being dangerous, the latter is neither very handy nor portable. In order to fix this we force the date time format to locale independent and project wide standard.
     * <p>
     * Java has only partial support for iso date strings, so we have to stick with something pretty similar. Support for ISO time zones was added in Java 1.7.
     * <p>
     * Starting with the year we proceed in iso format down to the milliseconds. And append then the time zone. Please note java does not support optional parts. This means the
     * time zone has to be always specified!
     * <p>
     * 2014-04-28 14:31:51.090 +0100
     */
    public static final String FORMAT_DATE_TIME = "yyyy-MM-dd HH:mm:ss.SSS XX";

    /**
     * In-Memory data handler protocol
     */
    public static final String PROTOCOL_MEMORY = "Memory";
    /**
     * Script data handler protocol
     */
    public static final String PROTOCOL_SCRIPT = "Script";

    private ModelConstants()
    {

    }
}
