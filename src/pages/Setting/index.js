import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/auth";
import MenuList from "./menuList";
import Add from "./add";
import Modify from "./modify";
import Update from "./update";

const Menu = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth.user) navigate("/login");
    });
    return (
        <div className="app-outer">
            <Routes>
                <Route path="/*" element={<MenuList />} />
                <Route path="add" element={<Add />} />
                <Route path="modify" element={<Modify />} />
                <Route path="modify/:id" element={<Update />} />
            </Routes>
        </div>
    );
};

export default Menu;
