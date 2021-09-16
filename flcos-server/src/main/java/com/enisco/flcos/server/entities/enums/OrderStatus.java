package com.enisco.flcos.server.entities.enums;

public enum OrderStatus
{
    /**
     * Newly created order, preparation was not attempted yet.
     */
    NEW,
    /**
     * Preparation was not successful - no template was found.
     */
    NO_TEMPLATE,
    /**
     * Preparation was not successful - matching template is currently invalid.
     */
    INVALID_TEMPLATE,
    /**
     * Preparation was not successful - mandatory attributes or material configuration missing.
     */
    PARAMETERS_MISSING,
    /**
     * Order preparation successful. Job can be created now.
     */
    VALID,
    /**
     * Job for this order was created.
     */
    JOB_CREATED,
    /**
     * Job for this order was released for production.
     */
    JOB_RELEASED,
    /**
     * The job is currently in production.
     */
    IN_PRODUCTION,
    /**
     * The job was finished.
     */
    FINISHED,
    /**
     * The order was canceled.
     */
    CANCELED
}
