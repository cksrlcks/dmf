import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/auth";
import MenuList from "./menuList";
import Add from "./add";
import Modify from "./modify";
import Update from "./update";
import useCollection from "../../hooks/useCollection";

const Setting = ({ ToastStore }) => {
    const auth = useAuth();
    const navigate = useNavigate();
    const { data, loading, error, mutate } = useCollection("menus");
    useEffect(() => {
        if (!auth.user) navigate("/login");
    });

    return (
        <div className="app-outer">
            <Routes>
                <Route path="/*" element={<MenuList />} />
                <Route path="add" element={<Add mutate={mutate} ToastStore={ToastStore} />} />
                <Route path="modify" element={<Modify data={data} loading={loading} mutate={mutate} ToastStore={ToastStore} />} />
                <Route path="modify/:id" element={<Update data={data} loading={loading} mutate={mutate} ToastStore={ToastStore} />} />
            </Routes>
        </div>
    );
};

export default Setting;
