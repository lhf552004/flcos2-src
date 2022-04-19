package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Getter
@Setter
@Entity(name="filler")
public class FillerEntity extends GCObjectEntity{
    @Column
    private String name;

    @Column
    private String category;

    @OneToOne
    @JoinColumn(name = "BIN_ID")
    private BinEntity bin;
}
