package com.enisco.flcos.server.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "receipt_log" )
public class ReceiptLogDocument {
    @Id
    private UUID id;


}
