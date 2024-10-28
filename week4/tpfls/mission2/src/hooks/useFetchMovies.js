// src/hooks/useFetchMovies.js
import { useState, useEffect } from 'react';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../mocks/movie';

const useFetchMovies = (category) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                let data;
                switch (category) {
                    case 'nowplaying':
                        data = await fetchNowPlayingMovies();
                        break;
                    case 'popular':
                        data = await fetchPopularMovies();
                        break;
                    case 'toprated':
                        data = await fetchTopRatedMovies();
                        break;
                    case 'upcoming':
                        data = await fetchUpcomingMovies();
                        break;
                    default:
                        throw new Error('Unknown category');
                }
                setMovies(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [category]);

    return { movies, loading, error };
};

export default useFetchMovies;
