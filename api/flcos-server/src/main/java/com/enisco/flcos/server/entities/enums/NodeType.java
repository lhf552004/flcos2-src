package com.enisco.flcos.server.entities.enums;

public enum NodeType {
    /**
     * Process step:
     * <ul>
     * <li>Process one or more components (i.e. sawing, painting)</li>
     * <li>Consume materials</li>
     * <li>Executed on production resource / assets</li>
     * <li>Contain parameter for machines / operators, used for tracking feedback from machines / operators</li>
     * <li>Has an interface describing which nodes can be connected to it.</li>
     * </ul>
     */
    PROCESS_STEP('P'),
    /**
     * Subprocess:
     * <ul>
     * <li>Reusable template describing a part of a production process.</li>
     * <li>Interface defined via unsaturated connection points within the subprocess.</li>
     * </ul>
     */
    SUBPROCESS('S'),
    /**
     * Component:
     * <ul>
     * <li>Object being produced, moving from asset to asset, being processed in individual process steps</li>
     * <li>Has a set of attributes</li>
     * </ul>
     */
    COMPONENT('C'),
    /**
     * Material:
     * <ul>
     * <li>Material stock for a material type</li>
     * <li>Can be connected to one or more consumers.</li>
     * <li>Linked to a specific material for each job.</li>
     * <li>Materials have global properties and job-specific properties.</li>
     * <li>Total consumption for a material stock in a job can be calculated by summing up the consumption of all
     * consumers.</li>
     * </ul>
     */
    MATERIAL('M'),
    /**
     * Used for interface declaration for the process flow in a subprocess.
     */
    COMPONENT_POINT('c'),
    /**
     * Used for interface declaration for the material flow in a subprocess.
     */
    MATERIAL_POINT('m'),
    /**
     * Used for interface declaration for the dependencies in a subprocess.
     */
    DEPENDENCY_POINT('d'),
    /**
     * Decisions can be placed in the process flow to model process alternatives such as rework.
     */
    DECISION('?'),
    /**
     * Link is also modelled as a node.
     */
    LINK('L')
    ;

    private final char key;

    NodeType(char key)
    {
        this.key = key;
    }

    /**
     * @return node type as used in the node key (i.e. process step 'P' -> key: "P: process step")
     */
    public char getKey()
    {
        return key;
    }
}
