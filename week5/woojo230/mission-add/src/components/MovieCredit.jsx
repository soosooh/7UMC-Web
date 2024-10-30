import styled from "styled-components";

const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  color: white;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 10px;
  text-align: center;
  width: 8%;
`;

const CastImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover; /* 이미지 비율 유지 */
  border: 2px solid white;
`;

const Director = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding-bottom: 10px;
  color: white;
`;

const CastName = styled.p`
  font-size: 12px;
  margin: 0;
`;

const CastChar = styled.p`
  font-size: 10px;
  margin: 0;
  color: gray;
`;

const MovieCredit = ({ castData }) => {
  console.log(castData);

  return (
    <>
      <Director>감독/출연</Director>
      <CastContainer>
        {castData.data?.cast?.map((data) => (
          <ListContainer key={data.cast_id}>
            <CastImg
              src={`https://image.tmdb.org/t/p/w200${data.profile_path}`}
              alt={data.name}
            />
            <CastName>{data.name}</CastName>
            <CastChar>{data.character}</CastChar>
          </ListContainer>
        ))}
      </CastContainer>
    </>
  );
};

export default MovieCredit;
