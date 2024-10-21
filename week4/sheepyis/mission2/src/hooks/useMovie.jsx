import { useState, useEffect } from "react";
import { API } from "../api/axios";

const useMovie = (url) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await API.get(url);
                //console.log(response.data.results);
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

export default useMovie;
