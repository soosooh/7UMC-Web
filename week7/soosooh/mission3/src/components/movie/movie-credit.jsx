import styled from "styled-components";
import useCustomFetch from "../../hooks/useCunstomFetch";
import CreditCard from "./credit-card";
import SkeletonCredit from "../skeleton/skeleton-credit";

const CreditTitle = styled.p`
  font-size: 2.5em;
  font-weight: bold;
  margin-left: 50px;

  @media (max-width: 768px) {
    font-size: 1.7em;
  }

  @media (max-width: 480px) {
    font-size: 1.3em;
  }
`;
const CreditContainer = styled.div`
  display: flex;
  margin: 35px;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;
const MovieCredit = ({ movie }) => {
  const {
    data: creditsData,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${movie.id}/credits`);

  // 데이터의 구조를 보장하기 위해 방어적인 코드 추가
  const credits = creditsData?.pages?.[0] || {}; // 첫 번째 페이지만 사용하거나 빈 객체로 설정
  const castList = credits.cast || []; // cast가 존재하지 않으면 빈 배열로 설정

  if (isLoading) {
    return <SkeletonCredit />;
  }
  if (isError) {
    return (
      <div>
        <h1 style={{ color: "white" }}>에러 중 입니다...</h1>
      </div>
    );
  }
  return (
    <>
      <CreditTitle>감독/출연</CreditTitle>
      <CreditContainer>
        {castList.map((castMember) => (
          <CreditCard
            key={castMember.id}
            profile_path={castMember.profile_path}
            original_name={castMember.original_name}
            character={castMember.character}
          />
        ))}
      </CreditContainer>
    </>
  );
};

export default MovieCredit;
