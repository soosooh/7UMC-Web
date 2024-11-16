// NowPlaying.jsx
import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchNowPlayingMovies } from '../api/movie';
import MovieList from '../components/list/MovieList';
import Skeleton from 'react-loading-skeleton';

const NowPlaying = () => {
    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(['nowPlaying'], fetchNowPlayingMovies, {
        getNextPageParam: (lastPage) => 
            lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    });

    if (isLoading) return <Skeleton count={5} />;
    if (isError) return <div>Error: 데이터 로딩 중 문제가 발생했습니다.</div>;

    return (
        <MovieList
            title="현재 상영중 영화"
            movies={data.pages.flatMap(page => page.results)}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isLoading={isLoading} // 필요시 추가
        />
    );
};

export default NowPlaying;
