package com.enisco.flcos.server.entities.job;

import com.enisco.flcos.server.entities.Attribute;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name="job_attribute")
public class JobAttributeEntity extends Attribute {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    private JobEntity job;
}
