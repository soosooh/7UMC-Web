import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import useCustomFetch from '../../hooks/useCustomFetch';
import SkeletonMovieItem from './SkeletonMovieItem';
import Spinner from '../spinner';

const ListContainer = styled.div`
  width: calc(100vw - 180px);
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;  
`
const MovieList = ({ listType, url }) => {
    const fetchUrl = url ? url : `/movie/${listType}?language=ko-KR&page=1`;
    const { data: movies, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useCustomFetch(fetchUrl, listType);
    const observerRef = useRef(null);

    const searchParams = new URLSearchParams(fetchUrl.split('?')[1]);
    const searchValue = searchParams.get('query');

    const lastMovieElementRef = useCallback(
        (node) => {
            if (isLoading) return;
            if (observerRef.current) observerRef.current.disconnect();

            observerRef.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });

            if (node) observerRef.current.observe(node);
        },
        [isLoading, fetchNextPage, hasNextPage]
    );


    if (isLoading && !movies || movies.pages.length === 0) {
        return (
            <ListContainer>
                {Array.from({ length: 20 }, (_, index) => (
                    <SkeletonMovieItem key={index} />
                ))}
            </ListContainer>
        );
    }
    if (isError) {
        return <div>에러 발생...</div>;
    }

    if (listType === "search" && (!movies || !movies.pages?.[0].results?.length)) {
        if (searchValue != '')
            return (
                <ListContainer>
                    <h1>해당하는 검색어 {searchValue}에</h1>
                    <h1>해당하는 데이터가 없습니다.</h1>
                </ListContainer>
            );
    }

    return (
        <>
            <ListContainer>
                {movies.pages.flatMap((page, pageIndex) =>
                    page.results.map((movie, index) => {
                        if (pageIndex === movies.pages.length - 1 && index === page.results.length - 1) {
                            return <MovieItem key={movie.id} movie={movie} ref={lastMovieElementRef} />;
                        } else {
                            return <MovieItem key={movie.id} movie={movie} />;
                        }
                    })
                )}
                {isFetchingNextPage &&
                    Array.from({ length: 10 }, (_, index) => (
                        <SkeletonMovieItem key={index + movies.pages.flatMap(page => page.results).length} />
                    ))}
            </ListContainer>

            {isFetchingNextPage && (<Spinner />)}
        </>
    );
};

MovieList.propTypes = {
    listType: PropTypes.string.isRequired,
    url: PropTypes.string,
};

export default MovieList;
