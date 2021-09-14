package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.NewUserDTO;
import com.enisco.flcos.server.entities.RoleEntity;
import com.enisco.flcos.server.entities.UserEntity;
import com.enisco.flcos.server.repository.postgresql.UserRepository;
import com.enisco.flcos.server.dto.NewUserDTO;
import com.enisco.flcos.server.dto.UpdateUserDto;
import com.enisco.flcos.server.dto.UserDto;
import com.enisco.flcos.server.entities.UserEntity;
import com.enisco.flcos.server.repository.postgresql.UserRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("api/v1/users")
@RestController
public class UsersController {
    Logger logger = LoggerFactory.getLogger(UsersController.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private ModelMapper modelMapper = new ModelMapper();

    @PostMapping
    public long createUser(@RequestBody NewUserDTO userDto) {
        var userEntity = modelMapper.map(userDto, UserEntity.class);
        userEntity.setEnabled(true);
        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        userRepository.save(userEntity);
        return userEntity.getId();
    }

    @GetMapping
    public List<UserDto> getUsers() {
        return userRepository.findAll().stream()
                .map(userEntity -> modelMapper.map(userEntity, UserDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping(path = "{id}")
    public UserDto getUser(@PathVariable Long id) {
        var result = userRepository.findById(id);
        return result.map(userEntity -> modelMapper.map(userEntity, UserDto.class)).orElse(null);
    }

    @PutMapping(path = "{id}")
    public void updateUser(@PathVariable Long id, @RequestBody UpdateUserDto userDto) {
        var result = userRepository.findById(id);
        if (result.isPresent()) {
            var userEntity = modelMapper.map(userDto, UserEntity.class);
            // If password is changed, update it, otherwise keep the same
            if (userDto.getPassword() != null && userDto.getPassword() != "") {
                userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
            } else {
                userEntity.setPassword(result.get().getPassword());
            }
            userRepository.save(userEntity);
        } else
            logger.error("User {} not found", id);
    }

    @DeleteMapping(path = "{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
