package com.enisco.flcos.server.api;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public abstract class ControllerBase {
    protected ModelMapper modelMapper = new ModelMapper();

    public Pageable getPageable(int page, int size, String direct, String sortProperty) {
        Sort sort;
        if ("".equals(direct)) {
            sort = Sort.by(sortProperty);
        } else {
            var direction = Enum.valueOf(Sort.Direction.class, direct);
            sort = Sort.by(direction, sortProperty);
        }
        return PageRequest.of(page, size, sort);
    }

}
