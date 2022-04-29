import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuList from "./menuList";
import View from "./menuView";

const Menu = ({ menus }) => {
    return (
        <Routes>
            <Route path="/*" element={<MenuList menus={menus} />} />
            <Route path=":id" element={<View menus={menus} />} />
        </Routes>
    );
};

export default Menu;
