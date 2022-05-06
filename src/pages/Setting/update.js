import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackHeader from "../../components/backHeader";
import UpdateForm from "./updateForm";
import { updateMenu } from "../../lib/db";

const Update = ({ data, mutate }) => {
    const { id } = useParams();
    const menuData = data.find((item) => item.id === id);
    const handleUpdate = async (updatedData) => {
        const updatedMenus = data.map((item) => {
            if (item.id === updatedData.id) {
                return updatedData;
            } else {
                return item;
            }
        });

        await updateMenu("menus", "default", updatedMenus);
        mutate();
    };
    return (
        <>
            <BackHeader title={"셋팅"} />
            <UpdateForm data={menuData} handleUpdate={handleUpdate} />
        </>
    );
};

export default Update;
