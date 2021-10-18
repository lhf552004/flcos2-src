package com.enisco.flcos.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@Entity(name = "menu")
public class MenuEntity extends EntityBase {
    @Column
    private String name;

    @Column
    private String url;

    @Column
    private Boolean external;

    @Column(name = "external_url")
    private String externalUrl;

    @Column(name = "icon_name")
    private String iconName;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private RoleEntity role;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "parent_id")
    private List<MenuEntity> children;
}
