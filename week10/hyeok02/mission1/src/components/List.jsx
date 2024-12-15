import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItem from './Item';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import Spinner from './Spinner'; 
import useInfiniteScroll from './InfiniteScroll'; 
import Pagination from './Pagination';

const Container = styled.div`
  width: calc(100vw - 180px);
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  height: auto;
  overflow-y: auto;
  position: relative; 

  @media (max-width: 900px) {
    width: calc(100vw - 120px);
    padding: 2rem;
    gap: 15px;
  }

  @media (max-width: 600px) {
    width: 100vw;
    padding: 1.5rem;
    gap: 10px;
  }

  @media (max-width: 300px) {
    padding: 1rem;
    gap: 5px;
  }
`;

const fetchMovies = async ({ pageParam = 1, url }) => {
  const response = await axios.get(`https://api.themoviedb.org/3/${url}`, {
    params: { page: pageParam, per_page: 20 },
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

const List = ({ url, showNoResults = true, loading: externalLoading, pagination = false }) => {
  const [currentPage, setCurrentPage] = useState(1); 

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['movies', url, currentPage],
    ({ pageParam = currentPage }) => fetchMovies({ pageParam, url }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.nextPage <= lastPage.totalPages ? lastPage.nextPage : undefined,
      enabled: !!url,
      keepPreviousData: true,  
    }
  );

  const observerElem = useInfiniteScroll(fetchNextPage, hasNextPage);

  const isLoadingState = externalLoading || isLoading;
  const displayMovies = data ? data.pages.flatMap((page) => page.results) : [];

  useEffect(() => {
    if (currentPage > 1) {
      fetchNextPage();
    }
  }, [currentPage, fetchNextPage]);

  const handlePageChange = (newPage) => {
    if (newPage !== currentPage) {
      setCurrentPage(newPage); 
    }
  };

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

      {isFetchingNextPage && (
        <>
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieItem key={`skeleton-${index}`} isLoading={true} />
          ))}
          <div style={{ textAlign: 'center', width: '100%', marginTop: '20px' }}>
            <Spinner />
          </div>
        </>
      )}

      {!pagination && <div ref={observerElem} style={{ height: '20px' }} />}
      
      {!hasNextPage && <p style={{ textAlign: 'center' }}></p>}

      {pagination && (
        <div style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center' }}>
          <Pagination 
            totalPages={data?.pages[0]?.totalPages || 0}
            onPageChange={handlePageChange} 
          />
        </div>
      )}
    </Container>
  );
};

List.propTypes = {
  url: PropTypes.string.isRequired,
  showNoResults: PropTypes.bool,
  loading: PropTypes.bool,
  pagination: PropTypes.bool, 
};

export default List;
