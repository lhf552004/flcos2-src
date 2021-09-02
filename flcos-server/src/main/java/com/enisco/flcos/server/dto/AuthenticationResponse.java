package com.enisco.flcos.server.dto;

public class AuthenticationResponse {
    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    private final String firstName;
    private final String lastName;
    private final Long id;
    private final String userName;
    private final String token;
    public AuthenticationResponse(String token, Long id, String userName, String firstName, String lastName) {
        this.token = token;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.id = id;
    }
    public String getToken() {
        return token;
    }

}
