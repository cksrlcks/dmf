import React from "react";
import AddForm from "./addForm";
import BackHeader from "../../components/backHeader";
import { setDocument } from "../../lib/db";
import useCollection from "../../hooks/useCollection";

const Add = ({ mutate }) => {
    const handleMenu = async (data) => {
        await setDocument("menus", data);
        mutate();
    };
    return (
        <>
            <BackHeader title={"셋팅"} />
            <AddForm handleMenu={handleMenu} mutate={mutate} />
        </>
    );
};

export default Add;
