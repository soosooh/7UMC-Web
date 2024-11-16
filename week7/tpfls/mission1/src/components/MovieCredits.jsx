// components/MovieCredits.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMovieCredits } from '../api/movie'; // API 함수 import
import Skeleton from 'react-loading-skeleton'; // 스켈레톤 UI 라이브러리

const MovieCredits = ({ movieId }) => {
    const { data: credits, isLoading, isError } = useQuery(['movieCredits', movieId], () => fetchMovieCredits(movieId));

    if (isLoading) return <Skeleton count={5} />;
    if (isError) return <div>Error: 출연진 정보를 불러오는 데 문제가 발생했습니다.</div>;

    return (
        <div>
            <h2>출연진</h2>
            <ul>
                {credits.cast.map(cast => (
                    <li key={cast.id}>{cast.name} as {cast.character}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCredits;
