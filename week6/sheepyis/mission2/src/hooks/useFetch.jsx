import { useState, useEffect } from "react";
import { API } from "../api/axios";
import CategoryData from "../utils/categoryData";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                if (url) {
                    const response = await API.get(url);
                    setData(response.data.results || response.data);
                } else {
                    setTimeout(() => {
                        setData(CategoryData);
                        setLoading(false);
                    }, 1000);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
