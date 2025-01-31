package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.NameDto;
import com.enisco.flcos.server.entities.EntityBase;
import com.enisco.flcos.server.util.RepositoryUtil;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.ParameterizedType;
import java.util.List;
import java.util.stream.Collectors;

public abstract class GenericControllerBase<Entity extends EntityBase, Dto extends DTOBase, ListDto extends DTOBase, NewDto> extends ControllerBase {

    abstract JpaRepository<Entity, Long> getRepository();

    protected Class<Entity> getEntityClass() {
        Class<Entity> tClass = (Class<Entity>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
        return tClass;
    }

    protected Class<Dto> getDtoClass() {
        Class<Dto> tClass = (Class<Dto>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[1];
        return tClass;
    }

    protected Class<ListDto> getListDtoClass() {
        Class<ListDto> tClass = (Class<ListDto>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[2];
        return tClass;
    }

    @PostMapping
    public ResponseEntity<Long> create(@RequestBody NewDto newDTO) {
        var entity = modelMapper.map(newDTO, getEntityClass());
        RepositoryUtil.create(getRepository(), entity);
        return ResponseEntity.ok(entity.getId());
    }

    @GetMapping
    public List<ListDto> getAll(@RequestParam(required = false, defaultValue = "0") int page, @RequestParam(required = false, defaultValue = "30") int size, @RequestParam(required = false, defaultValue = "") String direct, @RequestParam(required = false, defaultValue = "id") String sortProperty) {
        return getRepository().findAll(getPageable(page, size, direct, sortProperty))
                .stream()
                .map(entity -> modelMapper.map(entity, getListDtoClass()))
                .collect(Collectors.toList());
    }

    @GetMapping("simple-all")
    public List<NameDto> getSimpleAll() {
        return getRepository().findAll()
                .stream()
                .map(entity -> modelMapper.map(entity, NameDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping(path = "{id}")
    public Dto get(@PathVariable Long id) {
        var result = getRepository().findById(id);
        return result.map(entity -> modelMapper.map(entity, getDtoClass())).orElse(null);
    }

    @PutMapping(path = "{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody Dto dto) {
        var existed = getRepository().findById(id);
        if (existed.isPresent()) {
            var entity = modelMapper.map(dto, getEntityClass());
            RepositoryUtil.update(getRepository(), entity);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        getRepository().deleteById(id);
        return ResponseEntity.ok().build();
    }

}
