package com.enisco.flcos.server.entities.job;

public final class AttributePathProperty
{
    public static final int ATTRIBUTE = 0;
    public static final int FUNCTION = 1;

    private int type;
    private String name;
    private String entity;
    private String entityLabel;

    private AttributePathProperty()
    {
    }

    public static Builder builder()
    {
        return new Builder();
    }

    public int getType()
    {
        return type;
    }

    public String getName()
    {
        return name;
    }

    public String getEntity()
    {
        return entity;
    }

    public String getEntityLabel()
    {
        return entityLabel;
    }

    @Override
    public String toString()
    {
        StringBuilder result = new StringBuilder();
        if ( entity != null )
        {
            result.append("$")
                    .append(entity);
            if ( entityLabel != null )
            {
                result.append("[")
                        .append(entityLabel)
                        .append("]");
            }
            result.append(": ");
        }
        if ( type == FUNCTION )
        {
            result.append("@");
        }
        result.append(name);
        return result.toString();
    }

    public static class Builder
    {
        private AttributePathProperty result = new AttributePathProperty();

        public Builder entity(String entity)
        {
            result.entity = entity;
            return this;
        }

        public Builder entityLabel(String label)
        {
            result.entityLabel = label;
            return this;
        }

        public Builder attribute(String attribute)
        {
            result.type = ATTRIBUTE;
            result.name = attribute;
            return this;
        }

        public AttributePathProperty build()
        {
            return result;
        }

        public Builder function(String function)
        {
            result.type = FUNCTION;
            result.name = function;
            return this;
        }
    }
}
