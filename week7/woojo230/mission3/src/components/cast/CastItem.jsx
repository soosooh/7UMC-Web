// CastItem.js
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px;
  text-align: center;
  width: 8%;

  @media (max-width: 768px) {
    width: 45%; /* 모바일에서 한 줄에 두 개씩 출력 */
    min-width: 120px;
  }

  @media (max-width: 480px) {
    width: 100%; /* 더 작은 화면에서는 한 줄에 한 개씩 */
  }
`;

const CastImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
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

const CastItem = ({ profilePath, name, character }) => {
  return (
    <ListContainer>
      <CastImg src={`https://image.tmdb.org/t/p/w200${profilePath}`} alt={name} />
      <CastName>{name}</CastName>
      <CastChar>{character}</CastChar>
    </ListContainer>
  );
};

export default CastItem;
