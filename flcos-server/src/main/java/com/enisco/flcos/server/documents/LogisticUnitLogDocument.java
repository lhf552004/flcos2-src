package com.enisco.flcos.server.documents;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Getter
@Setter
@Document(collection = "Logistic_Unit_Log" )
public class LogisticUnitLogDocument extends DocumentBase {

    private Long logisticUnitId;

    private double actualWeight;
}
