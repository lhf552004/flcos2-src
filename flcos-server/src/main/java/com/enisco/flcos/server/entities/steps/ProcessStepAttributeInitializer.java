package com.enisco.flcos.server.entities.steps;

import enisco.emes.addon.pcs.server.entities.initializers.AttributeInitializer;

import javax.persistence.*;

@Entity
@Cacheable
@Table(name = "PCS_PROCESS_STEP_INIT", uniqueConstraints = @UniqueConstraint(columnNames = "SET_ID, ORDER_NO"))
public class ProcessStepAttributeInitializer
        extends AttributeInitializer
{
    @ManyToOne
    @JoinColumn(name = "SET_ID", nullable = false)
    private enisco.emes.addon.pcs.server.entities.steps.ProcessStepFieldConfiguration parent;

    public enisco.emes.addon.pcs.server.entities.steps.ProcessStepFieldConfiguration getParent()
    {
        return parent;
    }

    public void setParent(enisco.emes.addon.pcs.server.entities.steps.ProcessStepFieldConfiguration parent)
    {
        this.parent = parent;
    }

    @SuppressWarnings("squid:S2176")
    public static class Builder
            extends AttributeInitializer.Builder<ProcessStepAttributeInitializer, Builder>
    {
        @Override
        protected ProcessStepAttributeInitializer create()
        {
            return new ProcessStepAttributeInitializer();
        }
    }
}
