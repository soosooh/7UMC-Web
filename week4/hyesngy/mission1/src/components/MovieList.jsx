import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import useCustomFetch from '../hooks/useCustomFetch';

const ListContainer = styled.div`
  width: calc(100vw - 180px);
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;  
`
const MovieList = ({ listType }) => {
    const { data: movies, isLoading, isError } = useCustomFetch(`/movie/${listType}?language=ko-KR&page=1`)

    if (isLoading) {
        return <div>로딩 중 입니다...</div>;
    }
    if (isError) {
        return <div>에러 발생...</div>;
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
};

export default MovieList;
