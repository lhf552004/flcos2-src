package com.enisco.flcos.server.documents;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
public class ChangeLogDocument extends DocumentBase {
    @Field
    private String name;

    @Field(name = "OLD_VALUE")
    private String oldValue;

    @Field(name = "NEW_VALUE")
    private String newValue;
}
