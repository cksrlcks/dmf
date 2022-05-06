import React from "react";
import useDocument from "./useDocument";

const useMenu = (collectionId, documentId) => {
    const { data, loading, error, mutate, revalidate } = useDocument(collectionId, documentId);
    return {
        data: data ? data.items : [],
        loading: !error && !data,
        error: error,
        mutate,
        revalidate,
    };
};

export default useMenu;
