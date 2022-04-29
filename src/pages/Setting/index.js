import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../../lib/auth";
import MenuList from "./menuList";
import Add from "./add";
import Status from "./stauts";
import Order from "./order";
const Menu = ({ menus }) => {
    const auth = useAuth();
    return (
        <Routes>
            <Route path="/*" element={<MenuList menus={menus} />} />
            <Route path="add" element={<Add menus={menus} />} />
            <Route path="status" element={<Status menus={menus} />} />
            <Route path="order" element={<Order menus={menus} />} />
        </Routes>
    );
};

export default Menu;
