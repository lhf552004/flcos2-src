package com.enisco.flcos.server.entities.steps;

public enum TriggerType
{
    /**
     * Searches forward from current / last finished step in the job and starts first workflow mapped to this trigger
     */
    SETUP,
    /**
     * Searches backward from current / last finished step in the job and starts first workflow mapped to this trigger
     */
    CLEANUP
}
