import styled from 'styled-components';
import CastItem from './CastItem';

const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  color: white;
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 15px;
    padding: 0 10px;
  }
`;

const CastList = ({ castData }) => {
  return (
    <CastContainer>
      {castData?.cast?.map((data) => (
        <CastItem
          key={data.cast_id}
          profilePath={data.profile_path}
          name={data.name}
          character={data.character}
        />
      ))}
    </CastContainer>
  );
};

export default CastList;
