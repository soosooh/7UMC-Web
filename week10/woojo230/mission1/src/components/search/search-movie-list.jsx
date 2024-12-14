import styled from "styled-components";
import MovieCard from "../movie/MovieCard";
import { useSearchParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";
import SkeletonList from "../skeleton/skeletonList";

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* 반응형 그리드 */
  gap: 20px; /* 카드 사이의 간격 */
  width: 80%; /* MovieContainer도 검색바와 동일한 너비 */
  margin-top: 20px;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    width: 80%;
  }
`;

const MessageContainer = styled.div`
  text-align: center;
  margin-top: 30px;
  width: 100%;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const SearchMovieList = () => {
  const [searchParams] = useSearchParams({
    mq: "",
  });
  const mq = searchParams.get("mq");

  const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1,`;
  const { moviesData, isLoading, isError } = useCustomFetch(url);

  if (isLoading) {
    return (
      <MovieContainer>
        <SkeletonList />
      </MovieContainer>
    );
  }

  return (
    <Wrapper>
      {mq && moviesData.data?.results.length === 0 ? (
        <MessageContainer>
          <h1>해당하는 검색어 "{mq}"에</h1>
          <h2>해당하는 데이터가 없습니다.</h2>
        </MessageContainer>
      ) : (
        <MovieContainer>
          {moviesData.data?.results.map((data) => (
            <MovieCard
              id={data.id} //
              key={data.id} //
              title={data.title} //
              poster_path={data.poster_path} //
              overview={data.overview} //
              release_date={data.release_date}
            />
          ))}
        </MovieContainer>
      )}
    </Wrapper>
  );
};

export default SearchMovieList;
