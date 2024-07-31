package com.enisco.flcos.server.dto;

import lombok.Getter;
import lombok.Setter;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;

@Getter
@Setter
public class DataDto {
    private String value;

    public static DataDto of(DataValue dataValue) {
        var dataDto = new DataDto();
        dataDto.setValue(dataValue.getValue().toString());
        return dataDto;
    }
}
