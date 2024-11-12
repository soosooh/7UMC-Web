// src/hooks/useMovieDetails.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchMovieDetails = async (movieId) => {
    const token = `Bearer ${import.meta.env.VITE_API_TOKEN}`;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        headers: {
            Authorization: token,
        },
        params: {
            append_to_response: 'credits',
        },
    });
    return response.data;
};

export const useMovieDetails = (movieId) => {
    return useQuery({
        queryKey: ['movieDetails', movieId],
        queryFn: () => fetchMovieDetails(movieId),
        staleTime: 1000 * 60 * 5, // 캐시 유지 시간: 5분
    });
};
