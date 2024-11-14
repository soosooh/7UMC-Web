import { useState } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import SkeletonCard from '../../components/movies/SkeletonCard';
import Pagination from '../../components/common/Pagination';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

const PopularContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  overflow-y: auto;
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const fetchPopularMovies = async (page = 1) => {
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }

  return response.json();
};

const Popular = () => {
  const [page, setPage] = useState(1);

  const { data: movies, isLoading, error } = useQuery({
    queryKey: ['popularMovies', page],
    queryFn: () => fetchPopularMovies(page),
    keepPreviousData: true,
  });

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));

  if (isLoading) {
    return (
      <PopularContainer>
        <MoviesContainer>
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </MoviesContainer>
      </PopularContainer>
    );
  }

  if (error) {
    return <PopularContainer>{error.message}</PopularContainer>;
  }

  if (!movies || movies.results.length === 0) {
    return <PopularContainer>영화 데이터가 없습니다.</PopularContainer>;
  }

  return (
    <PopularContainer>
      <MoviesContainer>
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
      <Pagination
        page={page}
        onPrevious={handlePreviousPage}
        onNext={handleNextPage}
        hasNextPage={!!movies.total_pages && page < movies.total_pages}
      />
    </PopularContainer>
  );
};

export default Popular;
