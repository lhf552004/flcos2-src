/*
 * (c) 2015 - 2020 ENisco GmbH &amp; Co. KG
 */
package com.enisco.flcos.server.entities.steps;

import com.enisco.flcos.server.entities.Consts;

import javax.persistence.*;

@Entity
@Table(name = "PCS_PROCESS_STEP_GROUP",
        uniqueConstraints = @UniqueConstraint(name = "PCS_PROCESS_STEP_GROUP_UQ", columnNames = "GROUP_NAME"))
//@formatter:on
public class ProcessStepGroupEntity
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PCS_ID")
    private long id;

    @Column(name = "GROUP_NAME", length = Consts.LENGTH_TEMPLATE_GROUP)
    private String groupName;

    @Column(name = "TRANSLATION", length = Consts.LENGTH_TRANSLATION)
    private String translation;

    public long getId()
    {
        return id;
    }

    public String getGroupName()
    {
        return groupName;
    }

    public void setGroupName(String group)
    {
        this.groupName = group;
    }

    public String getTranslation()
    {
        return translation;
    }

    public void setTranslation(String translation)
    {
        this.translation = translation;
    }
}
