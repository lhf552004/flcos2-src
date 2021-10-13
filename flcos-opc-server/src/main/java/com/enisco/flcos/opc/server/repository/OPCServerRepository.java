package com.enisco.flcos.opc.server.repository;


import com.enisco.flcos.sdk.entities.OPCServerEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OPCServerRepository extends JpaRepository<OPCServerEntity, Long> {

}
