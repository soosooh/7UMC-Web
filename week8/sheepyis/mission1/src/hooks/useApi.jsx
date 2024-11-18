import { useState } from "react";
import { API } from "../api/axios";

const useApi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async (method, url, body = null) => {
        setLoading(true);
        setError(null);
        try {
            const response = await API[method](url, body);
            console.log(response.data);
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        data,
        loading,
        error,
        get: (url) => request("get", url),
        post: (url, body) => request("post", url, body),
        patch: (url, body) => request("patch", url, body),
        del: (url, body) => request("delete", url, body),
    };
};

export default useApi;
