package com.enisco.flcos.opc.server.services;

import com.enisco.flcos.opc.server.entities.UserEntity;
import com.enisco.flcos.opc.server.filters.JwtRequestFilter;
import com.enisco.flcos.opc.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailService implements UserDetailsService {

    @Autowired(required = true)
    UserRepository userRepository;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<UserEntity> user = userRepository.findByUserName(userName);
        user.orElseThrow(() -> new UsernameNotFoundException("Not found" + userName));
        return user.map(MyUserDetails::new).get();
    }
}
