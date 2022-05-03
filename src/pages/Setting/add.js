import React from "react";
import AddForm from "../../components/addMenu";
import BackHeader from "../../components/backHeader";
import { addMenu } from "../../lib/db";
const Add = () => {
    const handleMenu = (data) => {
        addMenu(data);
    };
    return (
        <>
            <BackHeader title={"셋팅"} />
            <AddForm handleMenu={handleMenu} />
        </>
    );
};

export default Add;
