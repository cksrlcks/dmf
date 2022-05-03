import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuList from "./menuList";
import View from "./menuView";

const Menu = ({ menus, loading }) => {
    if (loading) {
        return <div className="empty">메뉴를 가져오는 중입니다.</div>;
    } else {
        return (
            <Routes>
                <Route path="/*" element={<MenuList menus={menus} />} />
                <Route path=":id" element={<View menus={menus} />} />
            </Routes>
        );
    }
};

export default Menu;
