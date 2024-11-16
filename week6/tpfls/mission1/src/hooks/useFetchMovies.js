// useFetchMovieDetail.js
import { useState, useEffect } from 'react';
import { fetchMovieDetail, fetchMovieCredits } from '../api/movie';
const useFetchMovieDetail = (movieId) => {
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                setLoading(true);
                setError(null);
                const movieData = await fetchMovieDetail(movieId);
                const creditsData = await fetchMovieCredits(movieId);
                setMovie(movieData);
                setCredits(creditsData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchDetail();
    }, [movieId]);

    return { movie, credits, loading, error };
};

export default useFetchMovieDetail;
