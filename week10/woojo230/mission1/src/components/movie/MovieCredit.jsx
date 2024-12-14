import styled from 'styled-components';
import CastList from '../cast/CastList';

const Director = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding-bottom: 10px;
  color: white;
  margin-top: 20px;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* 태블릿 크기에서는 글자 크기 줄이기 */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* 모바일 화면에서는 더 작게 */
  }
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
