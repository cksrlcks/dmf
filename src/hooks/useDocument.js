import React from "react";
import useSWR from "swr";
import { getDocument } from "../lib/db";

const fetcher = async (collectionId, documentId) => {
    const data = await getDocument(collectionId, documentId);
    return data;
};

const useDocument = (collectionId, documentId) => {
    const { data, error, mutate, revalidate } = useSWR([collectionId, documentId], fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 500000,
    });
    return {
        data: data,
        loading: !error && !data,
        error: error,
        mutate,
        revalidate,
    };
};

export default useDocument;
