import React from "react";
import AddForm from "../../components/addMenu";
import BackHeader from "../../components/backHeader";
import { updateMenu } from "../../lib/db";
import useMenu from "../../hooks/useMenu";
const Add = () => {
    const { data: menus, mutate } = useMenu("menus", "default");
    const handleMenu = async (data) => {
        await updateMenu("menus", "default", [data, ...menus]);
        mutate();
    };
    return (
        <>
            <BackHeader title={"셋팅"} />
            <AddForm handleMenu={handleMenu} />
        </>
    );
};

export default Add;
