import { useRef, useEffect, useCallback } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import SkeletonCard from '../../components/movies/SkeletonCard';
import LoadingSpinner from '../../components/common/LoadingSpinner'; 
import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';

const NowPlayingContainer = styled.div`
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

const fetchNowPlayingMovies = async ({ pageParam = 1 }) => {
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=${pageParam}`, {
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

const NowPlaying = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['nowPlayingMovies'],
    queryFn: fetchNowPlayingMovies,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
    },
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
      <NowPlayingContainer>
        <MoviesContainer>
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </MoviesContainer>
      </NowPlayingContainer>
    );
  }

  if (error) {
    return <NowPlayingContainer>{error.message}</NowPlayingContainer>;
  }

  return (
    <NowPlayingContainer>
      <MoviesContainer>
        {data.pages.flatMap((page) =>
          page.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </MoviesContainer>
      {isFetchingNextPage && <LoadingSpinner />} {/* 새로 만든 LoadingSpinner 컴포넌트 사용 */}
      <div ref={loadMoreRef} style={{ height: '1px' }}></div> {/* 무한 스크롤 트리거 */}
    </NowPlayingContainer>
  );
};

export default NowPlaying;
