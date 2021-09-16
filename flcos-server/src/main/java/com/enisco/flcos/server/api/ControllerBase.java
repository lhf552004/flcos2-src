package com.enisco.flcos.server.api;

import com.enisco.flcos.server.entities.EntityBase;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.validation.constraints.NotNull;
import java.util.Date;

public class ControllerBase {
    protected ModelMapper modelMapper = new ModelMapper();

    public Pageable getPageable(int page, int size, String direct, String sortProperty) {
        Sort sort;
        if (direct == "") {
            sort = Sort.by(sortProperty);
        } else {
            var direction = Enum.valueOf(Sort.Direction.class, direct);
            sort = Sort.by(direction, sortProperty);
        }
        return PageRequest.of(page, size, sort);
    }




}
