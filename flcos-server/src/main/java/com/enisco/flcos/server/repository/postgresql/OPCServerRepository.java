package com.enisco.flcos.server.repository.postgresql;


import com.enisco.flcos.server.entities.opc.OPCServerEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OPCServerRepository extends JpaRepository<OPCServerEntity, Long> {

}
