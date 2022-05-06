import React from "react";
import useSWR, { useSWRConfig } from "swr";
import { getCollection } from "../lib/db";

const fetcher = async (url) => {
    const data = await getCollection(url);
    return data;
};

const useCollection = (url) => {
    const { mutate } = useSWRConfig();
    const { data, error } = useSWR(url, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 500000,
        initialData: [],
        revalidateOnMount: true,
    });
    return {
        data: data,
        loading: !error && !data,
        error: error,
        mutate,
    };
};

export default useCollection;
