import { useState, useEffect } from "react";
import { API } from "../api/axios";

const useMovies = (url) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await API.get(url);
                setMovies(response.data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [url]);

    return { movies, loading, error };
};

export default useMovies;
