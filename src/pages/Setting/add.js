import React from "react";
import AddForm from "./addForm";
import BackHeader from "../../components/backHeader";
import { setDocument } from "../../lib/db";
import useCollection from "../../hooks/useCollection";

const Add = () => {
    const { mutate } = useCollection("menus");
    const handleMenu = async (data) => {
        await setDocument("menus", data);
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
