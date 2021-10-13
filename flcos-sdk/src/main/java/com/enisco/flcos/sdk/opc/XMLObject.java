package com.enisco.flcos.sdk.opc;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import java.util.ArrayList;

/**
 * Represent a XML-Element with all attribute or element of a Object
 */
@XmlAccessorType(XmlAccessType.FIELD)
public class XMLObject
{
    @XmlAttribute
    private String name;

    @XmlElement(name = XMLConst.ELM_PROPERTY)
    private ArrayList<XMLProperty> properties;

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

    public ArrayList<XMLProperty> getProperties()
    {
        return properties;
    }

    public void setProperties(ArrayList<XMLProperty> properties)
    {
        this.properties = properties;
    }

//    /**
//     * Create a new Entity with data from XML-Object
//     * <p>
//     *
//     * @return the entity
//     */
//    public SwitchVariableEntity getEntity(String debugName, String fileName, UploadBuilder result)
//    {
//        if ( properties == null )
//        {
//            return null;
//        }
//        result.pushPath();
//
//        SwitchVariableEntity entity = new SwitchVariableEntity();
//        entity.setDebugName(debugName);
//        entity.setFileName(fileName);
//        for ( XMLProperty xmlProperty : properties )
//        {
//            if ( !entity.setProperty(xmlProperty.getName(), xmlProperty.getValue()) )
//            {
//                result.file(fileName)
//                        .subpath(xmlProperty.getName())
//                        .info(InfoType.INFORMATION, "Upload.Field%1NotUsedIn%2");
//            }
//        }
//
//        result.popPath();
//        return entity;
//    }
//
//    @Override
//    public void compare(UploadComparable otherObject, UploadBuilder result)
//    {
//        result.pushPath()
//                .subpath(getName());
//        result.compareLists(properties, ((XMLObject) otherObject).properties);
//
//        result.popPath();
//    }
//
//    @Override
//    public String getComparableKey()
//    {
//        return getName();
//    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }
}
