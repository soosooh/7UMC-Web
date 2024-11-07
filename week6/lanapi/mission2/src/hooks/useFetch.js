// src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://api.themoviedb.org/3${url}`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`, // .env 파일의 토큰 사용
                    },
                });
                setData(response.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        if (url) fetchData();
    }, [url]);

    return { data, isLoading, isError };
};

export default useFetch;
