

import React from 'react';
import MovieCard from '../../../components/movies/MovieCard';
import CardContainer from '../../../components/movies/CardContainer';
import useFetch from '../../../hooks/UseFetch'; // useFetch 훅을 가져옵니다.



const Popular = () => {
    const { data: moviesData, isLoading, isError } = useFetch('movie/popular?language=ko&page=1');

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

export default Popular;
