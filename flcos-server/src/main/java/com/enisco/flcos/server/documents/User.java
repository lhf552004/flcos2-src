package com.enisco.flcos.server.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "User" )
public class User {
    @Id
    private UUID id;
    private String userName;
    private String password;
    private boolean active;
    private String roles;
    private String givenName;
    private String lastName;

    public void setId(UUID id) {
        this.id = id;
    }

    public boolean isActive() {
        return active;
    }

    public String getRoles() {
        return roles;
    }

    public String getPassword() {
        return password;
    }

    public UUID getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getGivenName() {
        return givenName;
    }

    public String getLastName() {
        return lastName;
    }
}
