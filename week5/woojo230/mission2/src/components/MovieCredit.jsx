import styled from "styled-components";
import CastList from "./CastList";

const Director = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding-bottom: 10px;
  color: white;
`;

const MovieCredit = ({ castData }) => {
  //console.log(castData);

  return (
    <>
      <Director>감독/출연</Director>
      <CastList castData={castData} />
    </>
  );
};

export default MovieCredit;
