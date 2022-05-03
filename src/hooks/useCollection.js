import React from "react";
import useSWR from "swr";
import { getCollection } from "../lib/db";

const fetcher = async (url) => {
    const data = await getCollection(url);
    return data;
};

const useCollection = () => {
    const { data, error, mutate } = useSWR("/menus", fetcher);
    return {
        data: data,
        loading: !error && !data,
        error: error,
        mutate: mutate,
    };
};

export default useCollection;
