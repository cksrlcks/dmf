import React from "react";
import useSWR from "swr";
import { getCollection } from "../lib/db";

const fetcher = async (url) => {
    const data = await getCollection(url);
    return data;
};

const useCollection = (url) => {
    const { data, error, revalidate } = useSWR(url, fetcher, {
        //revalidateOnMount : true,
    });
    return {
        data: data,
        loading: !error && !data,
        error: error,
        revalidate
    };
};

export default useCollection;
