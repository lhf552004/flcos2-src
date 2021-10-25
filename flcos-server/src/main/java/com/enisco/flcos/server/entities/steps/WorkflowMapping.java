package com.enisco.flcos.server.entities.steps;

import enisco.emes.addon.pcs.server.entities.Consts;

import javax.persistence.*;

@Embeddable
// @formatter:off
@AttributeOverrides({
    @AttributeOverride(name = "trigger", column = @Column(name = "TRIGGER_NAME", length = Consts.LENGTH_TRIGGER)),
    @AttributeOverride(name = "workflow", column = @Column(length = Consts.LENGTH_WORKFLOW)),
    @AttributeOverride(name = "triggerType", column = @Column(name = "TRIGGER_TYPE")),
})
// @formatter:on
public class WorkflowMapping
{
    private String trigger;
    private String workflow;

    @Enumerated(EnumType.STRING)
    private enisco.emes.addon.pcs.server.entities.steps.TriggerType triggerType;

    public static WorkflowMapping of(enisco.emes.addon.pcs.server.entities.steps.TriggerType triggerType, String trigger, String workflow)
    {
        WorkflowMapping result = new WorkflowMapping();
        result.setTrigger(trigger);
        result.setWorkflow(workflow);
        result.setTriggerType(triggerType);

        return result;
    }

    public String getTrigger()
    {
        return trigger;
    }

    public void setTrigger(String trigger)
    {
        this.trigger = trigger;
    }

    public String getWorkflow()
    {
        return workflow;
    }

    public void setWorkflow(String workflow)
    {
        this.workflow = workflow;
    }

    public enisco.emes.addon.pcs.server.entities.steps.TriggerType getTriggerType()
    {
        return triggerType;
    }

    public void setTriggerType(enisco.emes.addon.pcs.server.entities.steps.TriggerType triggerType)
    {
        this.triggerType = triggerType;
    }
}
