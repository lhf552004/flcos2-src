package com.enisco.flcos.server.dto.supplier;

import com.enisco.flcos.server.dto.DTOBase;
import com.enisco.flcos.server.dto.DataDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SupplierDto extends DTOBase {

    private String name;

    private String address;

    private String email;

    private String phone;
}
