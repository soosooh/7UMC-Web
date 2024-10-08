// pages/NowPlaying.js
import React, { useEffect, useState } from 'react';
import { fetchNowPlayingMovies } from '../mocks/movie'; // API 또는 더미 데이터 함수
import MovieList from '../components/MoveList';

const NowPlaying = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNowPlayingMovies = async () => {
            try {
                const nowPlayingMovies = await fetchNowPlayingMovies();
                setMovies(nowPlayingMovies.results); // API 응답에 맞게 수정
            } catch (error) {
                setError(error.message);
            }
        };

        getNowPlayingMovies();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return <MovieList title="현재 상영중 영화" movies={movies} />;
};

export default NowPlaying;
