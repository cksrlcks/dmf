import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/auth";
import MenuList from "./menuList";
import Add from "./add";
import Status from "./stauts";
import Order from "./order";

const Menu = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth.user) navigate("/login");
    });
    return (
        <Routes>
            <Route path="/*" element={<MenuList />} />
            <Route path="add" element={<Add />} />
            <Route path="status" element={<Status />} />
            <Route path="order" element={<Order />} />
        </Routes>
    );
};

export default Menu;
