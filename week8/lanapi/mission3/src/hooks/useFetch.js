import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, token) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/${url}`, {
                    headers: {
                        Authorization: token, 
                    },
                });
                setData(response.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url, token]);

    return { data, isLoading, isError };
};

export default useFetch;
