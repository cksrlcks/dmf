import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/auth";
import SettingList from "../../pages/SettingList";
import AddMenu from "../../pages/AddMenu";
import ModifyMenus from "../../pages/ModifyMenus/";
import ModifyMenu from "../../pages/ModifyMenu";
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
                <Route path="/*" element={<SettingList />} />
                <Route path="add" element={<AddMenu mutate={mutate} ToastStore={ToastStore} />} />
                <Route path="modify" element={<ModifyMenus data={data} loading={loading} mutate={mutate} ToastStore={ToastStore} />} />
                <Route path="modify/:id" element={<ModifyMenu data={data} loading={loading} mutate={mutate} ToastStore={ToastStore} />} />
            </Routes>
        </div>
    );
};

export default Setting;
