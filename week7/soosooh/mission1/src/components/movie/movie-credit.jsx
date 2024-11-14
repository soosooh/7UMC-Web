import styled from "styled-components";
import useCustomFetch from "../../hooks/useCunstomFetch";
import CreditCard from "./credit-card";
import SkeletonCredit from "../skeleton/skeleton-credit";

const CreditTitle = styled.p`
  font-size: 2.5em;
  font-weight: bold;
  margin-left: 50px;
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
    data: credits,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${movie.id}/credits`);

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
        {credits?.cast.map((castMember) => (
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
