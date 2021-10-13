package com.enisco.flcos.sdk.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Setter
@Getter
@Entity(name = "f_role")
public class RoleEntity extends EntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    @ManyToMany(mappedBy = "roles", fetch = FetchType.EAGER)
    private Collection<UserEntity> users;

}
