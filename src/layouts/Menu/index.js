import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuList from "../../pages/MenuList";
import MenuView from "../../pages/MenuView";
import useCollection from "../../hooks/useCollection";

const Menu = () => {
    const { data: menus, loading, error } = useCollection("menus");
    if (loading) {
        return <div className="empty">메뉴를 가져오는 중입니다.</div>;
    } else {
        return (
            <Routes>
                <Route path="/*" element={<MenuList menus={menus} />} />
                <Route path=":id" element={<MenuView menus={menus} />} />
            </Routes>
        );
    }
};

export default Menu;
