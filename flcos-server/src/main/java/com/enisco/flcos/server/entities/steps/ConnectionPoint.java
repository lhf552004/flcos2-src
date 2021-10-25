package com.enisco.flcos.server.entities.steps;

import com.enisco.flcos.server.entities.Consts;
import com.enisco.flcos.server.entities.enums.NodeType;
import enisco.emes.addon.pcs.server.entities.Consts;
import enisco.emes.addon.pcs.server.entities.template.model.TemplateModelLinkEntity;
import enisco.emes.addon.pcs.server.entities.template.model.TemplateModelNodeType;
import enisco.emes.platform.api.server.jmm.job.NodeType;
import enisco.emes.platform.api.server.util.AbstractBuilder;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
@AttributeOverrides({ @AttributeOverride(name = "name", column = @Column(length = Consts.LENGTH_CONNECTION_POINT_NAME)),
        @AttributeOverride(name = "label", column = @Column(length = Consts.LENGTH_LABEL)), })
public class ConnectionPoint
{
    private String name;
    private String label;
    private boolean mandatory;
    private ConnectionPointDirection direction;
    private NodeType type;

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getLabel()
    {
        return label;
    }

    public void setLabel(String label)
    {
        this.label = label;
    }

    public ConnectionPointDirection getDirection()
    {
        return direction;
    }

    public void setDirection(ConnectionPointDirection direction)
    {
        this.direction = direction;
    }

    public NodeType getType()
    {
        return type;
    }

    public void setType(NodeType type)
    {
        this.type = type;
    }

    public boolean isMandatory()
    {
        return mandatory;
    }

    public void setMandatory(boolean mandatory)
    {
        this.mandatory = mandatory;
    }

    @Override
    public String toString()
    {
        return "ConnectionPoint{" + "name='" + name + '\'' + ", label='" + label + '\'' + ", mandatory=" + mandatory
                + ", direction=" + direction + ", type=" + type + '}';
    }

    public boolean matchesLinkType(TemplateModelLinkEntity link)
    {
        switch ( getType() )
        {
            case COMPONENT_POINT:
                return link.getType() == TemplateModelNodeType.COMPONENT_LINK;
            case MATERIAL_POINT:
                return link.getType() == TemplateModelNodeType.MATERIAL_LINK;
            case DEPENDENCY_POINT:
                return link.getType() == TemplateModelNodeType.DEPENDENCY_LINK;
            default:
                return false;
        }
    }

    public boolean matchesName(String name)
    {
        return Consts.WILDCARD_SYMBOL.equals(getName()) || Consts.WILDCARD_SYMBOL.equals(name)
                || getName().equals(name);
    }

    public String toIdentifier()
    {
        return getDirection().getLabel() + ":" + getName() + (getLabel() == null ? "" : "@" + getLabel());
    }

    public static class Builder
            extends AbstractBuilder<ConnectionPoint>
    {
        public Builder direction(enisco.emes.addon.pcs.server.entities.steps.ConnectionPointDirection direction)
        {
            getResult().setDirection(direction);
            return this;
        }

        public Builder name(String name)
        {
            getResult().setName(name);
            return this;
        }

        public Builder label(String label)
        {
            getResult().setLabel(label);
            return this;
        }

        public Builder type(NodeType type)
        {
            getResult().setType(type);
            return this;
        }

        public Builder mandatory(boolean mandatory)
        {
            getResult().setMandatory(mandatory);
            return this;
        }

        @Override
        protected ConnectionPoint create()
        {
            return new ConnectionPoint();
        }
    }
}
