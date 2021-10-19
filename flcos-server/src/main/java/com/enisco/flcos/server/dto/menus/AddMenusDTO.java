package com.enisco.flcos.server.dto.menus;

import com.enisco.flcos.server.dto.menus.MenuDto;

import java.util.List;

public class AddMenusDTO {
    private List<MenuDto> menus;

    public List<MenuDto> getMenus() {
        return menus;
    }

    public void setMenus(List<MenuDto> menus) {
        this.menus = menus;
    }
}
