import styled from "styled-components";
import MovieCard from "../../components/movies/MovieCard";
import SkeletonCard from "../../components/movies/SkeletonCard"; 
import SearchInput from "../../components/search/SearchInput";
import NoResultsMessage from "../../components/search/NoResultsMessage";
import useSearchMovies from "../../hooks/useSearchMovies";

const SearchPageContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
`;

const SearchPage = () => {
  const { query, setQuery, movies, handleSearch, isSearchPerformed, isLoading } = useSearchMovies();

  return (
    <SearchPageContainer>
      <SearchInput query={query} setQuery={setQuery} onSearch={handleSearch} />
      <ResultsContainer>
        {isLoading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          isSearchPerformed && <NoResultsMessage query={query} />
        )}
      </ResultsContainer>
    </SearchPageContainer>
  );
};

export default SearchPage;
