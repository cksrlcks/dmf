import React from "react";
import useSWR from "swr";
import { getCollection } from "../lib/db";

const fetcher = async (url) => {
    const data = await getCollection(url);
    return data;
};

const useCollection = (url) => {
    const { data, error, mutate, revalidate } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval : 500000
    });
    return {
        data: data,
        loading: !error && !data,
        error: error,
        mutate,
        revalidate
    };
};

export default useCollection;
