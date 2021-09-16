package com.enisco.flcos.server.entities.enums;

public enum StepStatus {
    PENDING(false, false),
    RUNNING(true, false),
    FINISHED(false, true);

    private final boolean running;
    private final boolean finished;

    StepStatus(boolean running, boolean finished)
    {
        this.running = running;
        this.finished = finished;
    }

    /**
     * @return process step is currently being executed
     */
    public boolean isRunning()
    {
        return running;
    }

    /**
     * @return process step is finished
     */
    public boolean isFinished()
    {
        return finished;
    }
}
