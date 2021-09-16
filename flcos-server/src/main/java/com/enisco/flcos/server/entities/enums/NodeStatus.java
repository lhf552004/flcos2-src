package com.enisco.flcos.server.entities.enums;

public enum NodeStatus
{
    NONE(StepStatus.PENDING),
    RUNNING(StepStatus.RUNNING),
    FINISHED(StepStatus.FINISHED),
    @Deprecated
    ERROR(StepStatus.FINISHED);

    private final StepStatus plannerStatus;

    NodeStatus(StepStatus plannerStatus)
    {
        this.plannerStatus = plannerStatus;
    }

    public StepStatus getPlannerStatus()
    {
        return plannerStatus;
    }
}
