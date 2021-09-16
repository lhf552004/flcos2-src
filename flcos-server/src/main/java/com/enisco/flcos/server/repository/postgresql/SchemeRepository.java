package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.scheme.SchemeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface SchemeRepository extends JpaRepository<SchemeEntity, Long> {

    Optional<SchemeEntity> findBySchemeName(String schemeName);

    Boolean existsBySchemeName(String schemeName);

    @Query("SELECT s.schemeName FROM sch_scheme s WHERE s.primitiv = :param")
    List<String> getAllNames(@Param("param") boolean param);
}
