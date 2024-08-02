package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.user.NewUserDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;

import org.springframework.boot.web.server.LocalServerPort;

import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UsersControllerIntegrationTest extends AbstractIntegrationTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void testCreateUser() {
        String url = "http://localhost:" + port + "/api/v1/users";

        NewUserDTO newUser = new NewUserDTO();
        newUser.setUserName("testuser");
        newUser.setPassword("password");

        ResponseEntity<Long> response = restTemplate.postForEntity(url, newUser, Long.class);

        assertNotNull(response.getBody());
    }
}
