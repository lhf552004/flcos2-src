package com.enisco.flcos.opc.server.repository;


import com.enisco.flcos.opc.server.entities.OPCServerEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OPCServerRepository extends JpaRepository<OPCServerEntity, Long> {

}
