import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import useCustomFetch from '../../hooks/useCustomFetch';
import SkeletonMovieItem from './SkeletonMovieItem';

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
    const { data: movies, isLoading, isError } = useCustomFetch(fetchUrl, listType);

    const searchParams = new URLSearchParams(fetchUrl.split('?')[1]);
    const searchValue = searchParams.get('query');

    if (isLoading) {
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

    if (listType === "search" && !movies.data?.results?.length) {
        if (searchValue != '')
            return (
                <ListContainer>
                    <h1>해당하는 검색어 {searchValue}에</h1>
                    <h1>해당하는 데이터가 없습니다.</h1>
                </ListContainer>
            );
    }

    return (
        <ListContainer>
            {movies.data?.results.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </ListContainer>
    );
};

MovieList.propTypes = {
    listType: PropTypes.string.isRequired,
    url: PropTypes.string,
};

export default MovieList;
