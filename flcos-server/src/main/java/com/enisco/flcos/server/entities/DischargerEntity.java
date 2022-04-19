package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Getter
@Setter
@Entity(name="discharger")
public class DischargerEntity extends GCObjectEntity {
    @Column
    private String name;

    @Column
    private String category;

    @Column
    private int priority;

    @OneToOne
    @JoinColumn(name = "bin_id")
    private BinEntity bin;

}
