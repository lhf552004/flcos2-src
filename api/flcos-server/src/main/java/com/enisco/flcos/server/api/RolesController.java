package com.enisco.flcos.server.api;

import com.enisco.flcos.server.dto.*;
import com.enisco.flcos.server.dto.role.NewRoleDto;
import com.enisco.flcos.server.dto.role.RoleDto;
import com.enisco.flcos.server.entities.RoleEntity;
import com.enisco.flcos.server.repository.relational.RoleRepository;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/roles")
@RestController
public class RolesController extends GenericControllerBase<RoleEntity, RoleDto, RoleDto, NewRoleDto> {
    Logger logger = LoggerFactory.getLogger(RolesController.class);

    private final RoleRepository roleRepository;

    public RolesController(@Autowired RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @PutMapping(path = "{id}/rename")
    public ResponseEntity rename(@PathVariable Long id, @RequestBody RenameDTO renameDTO) {
        var result = roleRepository.findById(id);
        if (result.isPresent()) {
            var roleEntity = result.get();
            roleEntity.setName(renameDTO.getName());
            RepositoryUtil.update(getRepository(), roleEntity);
            return ResponseEntity.ok().build();
        } else {
            logger.error(Consts.NOT_FOUND, "Role", id);
            return ResponseEntity.notFound().build();
        }
    }

    @Override
    JpaRepository<RoleEntity, Long> getRepository() {
        return roleRepository;
    }
}
