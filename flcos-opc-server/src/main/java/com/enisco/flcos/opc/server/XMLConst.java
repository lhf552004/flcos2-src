package com.enisco.flcos.opc.server;

public interface XMLConst
{
    String XML_NAMESPCE = "eisenmann.emes.controldefinition";

    String XML_ROOT = "controldefinition";
    String ELM_CONTROL_DATA = "ControlData";
    String ELM_CONTROL = "Control";
    String ELM_OBJECT = "Object";
    String ELM_PROPERTY = "Property";
    String ELM_ = "";

    String VAL_NAME = "name";
    String VAL_GENERATED = "generated";
    String VAL_VALUE = "value";
    String VAL_TYPE = "type";
    String VAL_ = "";

    String ERR_PARSE_XML = "Upload.Failed unmarshalling file";
    String ERR_EMPTY_NAME = "Upload.Field %1 empty";
    String ERR_EMPTY_VALUE = "Invalid value in %1";

}
