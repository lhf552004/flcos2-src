package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity(name = "menu")
public class MenuEntity extends EntityBase {
    @Column
    private String name;

    @Column
    private String url;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private RoleEntity role;
}
