/*
 * (c) 2015 - 2016 ENisco GmbH & Co. KG
 */
package com.enisco.flcos.opc.server.opc;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Minimal model to read dependencies
 */
@XmlRootElement(name = "Uses")
@XmlAccessorType(XmlAccessType.FIELD)
public class EmesUses
{
    @XmlAttribute
    private String name;

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

}
