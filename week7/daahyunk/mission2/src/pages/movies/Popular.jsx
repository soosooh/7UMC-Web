import { useRef, useEffect, useCallback } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import SkeletonCard from '../../components/movies/SkeletonCard';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { useInfiniteQuery } from '@tanstack/react-query';
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

const fetchPopularMovies = async ({ pageParam = 1 }) => {
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${pageParam}`, {
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
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
    getNextPageParam: (lastPage) => lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  });

  const loadMoreRef = useRef();

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [handleObserver]);

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

  return (
    <PopularContainer>
      <MoviesContainer>
        {data.pages.flatMap((page) =>
          page.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </MoviesContainer>
      {isFetchingNextPage && <LoadingSpinner />}
      <div ref={loadMoreRef} style={{ height: '1px' }}></div>
    </PopularContainer>
  );
};

export default Popular;
