import React from "react";
import { useParams } from "react-router-dom";
import BackHeader from "../../components/backHeader";
import UpdateForm from "./updateForm";
import { updateDocument } from "../../lib/db";

const Update = ({ data, mutate, loading }) => {
    const { id } = useParams();
    const menuData = data.find((item) => item.id === id);
    const handleUpdate = async (updatedData) => {
        await updateDocument("menus", updatedData);
    };
    return (
        <>
            <BackHeader title={"셋팅"} />
            <UpdateForm data={menuData} handleUpdate={handleUpdate} mutate={mutate} />
        </>
    );
};

export default Update;
