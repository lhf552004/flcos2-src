/*
 * (c) 2015 - 2016 ENisco GmbH & Co. KG
 */
package com.enisco.flcos.server.opc.server;

import javax.xml.bind.annotation.*;
import java.util.ArrayList;

/**
 * Minimal model to read dependencies
 */
@XmlRootElement(name = "Module")
@XmlAccessorType(XmlAccessType.FIELD)
public class EmesModule
{

    @XmlAttribute
    private String name;

    @XmlElement(name = "Uses")
    private ArrayList<EmesUses> uses;

    @XmlElement(name = XMLConst.ELM_OBJECT)
    private ArrayList<XMLObject> objects;

    public ArrayList<XMLObject> getObjects()
    {
        return objects;
    }

    public void setObjects(ArrayList<XMLObject> objects)
    {
        this.objects = objects;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public ArrayList<EmesUses> getUses()
    {
        if ( uses == null )
        {
            uses = new ArrayList<>();
        }
        return uses;
    }

    public void setUses(ArrayList<EmesUses> uses)
    {
        this.uses = uses;
    }

    @Override
    public String toString()
    {
        StringBuilder builder = new StringBuilder();
        builder.append("Module " + name + ": ");
        for ( EmesUses uses : getUses() )
        {
            builder.append(uses.getName() + ", ");

        }
        return builder.toString();
    }
}
