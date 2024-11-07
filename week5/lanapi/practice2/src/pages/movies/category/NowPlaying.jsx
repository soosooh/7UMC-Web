//피드백
//미션1,2의 pages>movies>popular.jsx 를 포함한 대부분의 페이지가 useFetch로 수정하라고 했음에도 수정되어 있지 않아요. 
//로딩, 에러 처리가 되도록 import 해서 사용하는 방식으로 수정해서 코드 바꿔주세요!

import React from 'react';
import MovieCard from '../../../components/movies/MovieCard';
import CardContainer from '../../../components/movies/CardContainer';
import useFetch from '../../../hooks/UseFetch';

const NowPlaying = () => {
    const { data: moviesData, isLoading, isError } = useFetch('movie/now_playing?language=ko&page=1');

    if (isLoading) return <div>로딩 중...</div>;
    if (isError) return <div>데이터를 불러오는 데 실패했습니다.</div>;

    return (
        <CardContainer>
            {moviesData?.results.map((movie) => (
                <MovieCard 
                    key={movie.id}
                    movieId={movie.id}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                />
            ))}
        </CardContainer>
    );
};

export default NowPlaying;
