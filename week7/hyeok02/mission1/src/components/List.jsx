import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItem from './Item';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import Spinner from './Spinner'; // Spinner 컴포넌트 import

const Container = styled.div`
  width: calc(100vw - 180px);
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  height: auto;
  overflow-y: auto;
`;

const fetchMovies = async ({ pageParam = 1, url }) => {
  const response = await axios.get(`https://api.themoviedb.org/3/${url}`, {
    params: { page: pageParam },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  });
  return {
    results: response.data.results,
    nextPage: pageParam + 1,
    totalPages: response.data.total_pages,
  };
};

const List = ({ url, showNoResults = true, loading: externalLoading }) => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['movies', url],
    ({ pageParam = 1 }) => fetchMovies({ pageParam, url }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.nextPage <= lastPage.totalPages ? lastPage.nextPage : undefined,
      enabled: !!url,
    }
  );

  const observerElem = useRef(null);

  useEffect(() => {
    if (!observerElem.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        });
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    observer.observe(observerElem.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  const isLoadingState = externalLoading || isLoading;

  const displayMovies = data ? data.pages.flatMap((page) => page.results) : [];

  if (isLoadingState) {
    return (
      <Container>
        {Array.from({ length: 10 }).map((_, index) => (
          <MovieItem key={index} isLoading={true} />
        ))}
      </Container>
    );
  }

  if (isError) {
    return <p>에러가 발생했습니다: {error.message || '영화 데이터를 불러오는 중 오류가 발생했습니다.'}</p>;
  }

  if (!displayMovies || displayMovies.length === 0) {
    return showNoResults ? <p>No results found.</p> : null;
  }

  return (
    <Container>
      {displayMovies.map((movie, index) => (
        <MovieItem key={`${movie.id}-${index}`} movie={movie} isLoading={false} />
      ))}
      
      {/* 기존 영화 항목들 아래에 10개의 스켈레톤 UI 추가 */}
      {isFetchingNextPage && (
        <>
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieItem key={`skeleton-${index}`} isLoading={true} />
          ))}
          <div style={{ textAlign: 'center', width: '100%', marginTop: '20px' }}>
            {/* 여기서 Spinner 컴포넌트를 호출하여 가운데에 위치시킴 */}
            <Spinner />
          </div>
        </>
      )}

      <div ref={observerElem} style={{ height: '20px' }} />
      {!hasNextPage && <p style={{ textAlign: 'center' }}>모든 데이터를 불러왔습니다.</p>}
    </Container>
  );
};

List.propTypes = {
  url: PropTypes.string.isRequired,
  showNoResults: PropTypes.bool,
  loading: PropTypes.bool,
};

export default List;
