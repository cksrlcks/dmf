import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuList from "./menuList";
import View from "./menuView";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
    const { data: menus, loading, error } = useMenu("menus", "default");
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
