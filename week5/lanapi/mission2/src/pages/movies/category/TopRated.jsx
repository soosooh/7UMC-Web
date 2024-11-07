import React from 'react';
import MovieCard from '../../../components/movies/MovieCard';
import CardContainer from '../../../components/movies/CardContainer';
import useFetch from '../../../hooks/UseFetch'; 

const TopRated = () => {
    //디버깅용 하드코딩
    // const apiUrl = 'api 주소'; 
    // const Token = `Bearer api 토큰`;
    
    const { data: moviesData, isLoading, isError } = useFetch(apiUrl, Token);

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

export default TopRated;
