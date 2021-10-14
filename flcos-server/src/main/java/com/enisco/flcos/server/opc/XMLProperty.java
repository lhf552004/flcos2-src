package com.enisco.flcos.server.opc;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Represent a XML-Element with all attribute or element of a Property
 */
@XmlRootElement(name = XMLConst.ELM_PROPERTY)
@XmlAccessorType(XmlAccessType.FIELD)
public class XMLProperty
    // implements UploadComparable
{
    @XmlAttribute(name = XMLConst.VAL_NAME)
    private String name;

    @XmlAttribute(name = XMLConst.VAL_VALUE)
    private String value;

    @XmlAttribute(name = XMLConst.VAL_TYPE)
    private String type;

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getValue()
    {
        return value;
    }

    public void setValue(String value)
    {
        this.value = value;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

//    public boolean check(UploadBuilder result)
//    {
//        return result.isSuccess();
//    }
//
//    @Override
//    public void compare(UploadComparable otherObject, UploadBuilder result)
//    {
//        result.pushPath()
//                .subpath(getName());
//        result.compareValue("value", getValue(), ((XMLProperty) otherObject).getValue());
//
//        result.popPath();
//    }
//
//    @Override
//    public String getComparableKey()
//    {
//        return getName();
//    }
}
