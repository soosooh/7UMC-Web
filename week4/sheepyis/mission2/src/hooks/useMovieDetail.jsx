import { useState, useEffect } from "react";
import { API } from "../api/axios";

const useMovieDetail = (movieId) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            setLoading(true);
            setError(null);

            //console.log(movieId);
            try {
                const response = await API.get(`/${movieId}`, {
                    params: { append_to_response: 'credits' }
                });
                //console.log(response.data);
                setMovie(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetail();
    }, [movieId]);

    return { movie, loading, error };
};

export default useMovieDetail;
