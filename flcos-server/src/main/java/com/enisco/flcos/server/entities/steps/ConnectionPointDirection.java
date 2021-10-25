package com.enisco.flcos.server.entities.steps;

import enisco.emes.addon.pcs.server.entities.job.NodeEntity;
import enisco.emes.addon.pcs.server.entities.template.model.TemplateModelLinkEntity;
import enisco.emes.addon.pcs.server.entities.template.model.TemplateModelNodeEntity;
import enisco.emes.addon.pcs.server.entities.template.model.TemplateModelNodeType;

import javax.validation.constraints.NotNull;

public enum ConnectionPointDirection
{
    INBOUND("IN"),
    OUTBOUND("OUT"),
    SATURATED("INTERNAL"),
    NOT_CONNECTED;

    private final String label;

    ConnectionPointDirection()
    {
        this(null);
    }

    ConnectionPointDirection(String label)
    {
        this.label = label;
    }

    public static ConnectionPointDirection fromNode(TemplateModelNodeEntity entity, TemplateModelNodeType type)
    {
        var inboundCount = entity.getTemplate()
                .getModel()
                .values()
                .stream()
                .filter(node -> node.getType() == type && ((TemplateModelLinkEntity) node).getTarget() == entity)
                .count();

        var outboundCount = entity.getTemplate()
                .getModel()
                .values()
                .stream()
                .filter(node -> node.getType() == type && ((TemplateModelLinkEntity) node).getSource() == entity)
                .count();

        return getDirectionFromLinkCount(inboundCount, outboundCount);
    }

    private static ConnectionPointDirection getDirectionFromLinkCount(long inboundCount, long outboundCount)
    {
        if ( inboundCount == 0 && outboundCount == 0 )
        {
            return NOT_CONNECTED;
        }

        if ( inboundCount > 0 && outboundCount > 0 )
        {
            return SATURATED;
        }

        if ( inboundCount > 0 )
        {
            return OUTBOUND;
        }

        return INBOUND;
    }

    public String getLabel()
    {
        return label;
    }

    @NotNull
    public ConnectionPointDirection getOpposite()
    {
        switch ( this )
        {
            case INBOUND:
                return OUTBOUND;
            case OUTBOUND:
                return INBOUND;
            case SATURATED:
                return NOT_CONNECTED;
            case NOT_CONNECTED:
                return SATURATED;
        }
        throw new UnsupportedOperationException();
    }

    public static ConnectionPointDirection fromNode(NodeEntity node)
    {
        return getDirectionFromLinkCount(node.getInbound()
                                                 .size(),
                                         node.getOutbound()
                                                 .size());
    }
}
