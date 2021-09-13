package com.enisco.flcos.server.repository.postgresql;

import com.enisco.flcos.server.entities.BinEntity;
import com.enisco.flcos.server.entities.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BinRepository extends JpaRepository<BinEntity, Long> {
    List<BinEntity> findByProduct(ProductEntity product);
}
