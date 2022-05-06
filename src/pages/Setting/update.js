import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackHeader from "../../components/backHeader";
import UpdateForm from "./updateForm";
import useCollection from "../../hooks/useCollection";
import { updateDocument } from "../../lib/db";

const Update = () => {
    const { id } = useParams();
    const { data, loading, mutate } = useCollection("menus");
    const menuData = data.find((item) => item.id === id);
    const handleUpdate = async (updatedData) => {
        await updateDocument("menus", updatedData);
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
