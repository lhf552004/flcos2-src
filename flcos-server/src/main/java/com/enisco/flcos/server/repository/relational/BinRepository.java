package com.enisco.flcos.server.repository.relational;

import com.enisco.flcos.server.entities.bin.BinEntity;
import com.enisco.flcos.server.entities.ProductEntity;
import com.enisco.flcos.server.entities.bin.BinType;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BinRepository extends JpaRepository<BinEntity, Long> {
    List<BinEntity> findByProduct(ProductEntity product);
    List<BinEntity> findByProductAndIsUsing(ProductEntity product, Boolean isUsing);
    List<BinEntity> findByLineNameAndType(String lineName, BinType type);
}
