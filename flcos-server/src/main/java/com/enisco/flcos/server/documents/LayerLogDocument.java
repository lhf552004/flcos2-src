package com.enisco.flcos.server.documents;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "Layer_Log" )
public class LayerLogDocument extends DocumentBase {

    private Long jobId;

    private String jobName;

    private String batchNumber;

    private Long productId;

    private String productName;

    private Long ingredientId;

    private String ingredientName;

    private double actualWeight;

    private String ingredientBatchNumber;
}
