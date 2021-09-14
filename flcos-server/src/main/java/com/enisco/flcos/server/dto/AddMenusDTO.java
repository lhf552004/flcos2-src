package com.enisco.flcos.server.dto;

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
