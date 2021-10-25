package com.enisco.flcos.server.entities.steps;

import enisco.emes.addon.pcs.server.entities.initializers.FieldConfiguration;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Cacheable
@Table(name = "STEP_PROCESS_STEP_FIELD", uniqueConstraints = @UniqueConstraint(columnNames = "STEP_ID, NAME"))
public class ProcessStepFieldConfiguration
        extends FieldConfiguration<ProcessStepAttributeInitializer>
{
    @ManyToOne
    @JoinColumn(name = "STEP_ID", nullable = false)
    private ProcessStepEntity processStep;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "parent")
    @OrderBy("orderNo")
    private List<ProcessStepAttributeInitializer> initializers = new ArrayList<>();

    @Override
    public List<ProcessStepAttributeInitializer> getInitializers()
    {
        return initializers;
    }

    @Override
    public ProcessStepFieldConfiguration deepCopy()
    {
        return (ProcessStepFieldConfiguration) super.deepCopy(new Builder(), getInitializers());
    }


    public ProcessStepEntity getProcessStep()
    {
        return processStep;
    }

    public void setProcessStep(ProcessStepEntity processStep)
    {
        this.processStep = processStep;
    }

    @SuppressWarnings("squid:S2176")
    public static class Builder
            extends FieldConfiguration.Builder<ProcessStepFieldConfiguration, ProcessStepAttributeInitializer, Builder>
    {
        @Override
        protected ProcessStepFieldConfiguration create()
        {
            return new ProcessStepFieldConfiguration();
        }

        @Override
        public Builder initializer(ProcessStepAttributeInitializer initializer)
        {
            initializer.setParent(getResult());
            return super.initializer(initializer);
        }
    }
}
