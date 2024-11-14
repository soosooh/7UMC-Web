// CastList.js
import styled from "styled-components";
import CastItem from "./CastItem";

const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  color: white;
`;

const CastList = ({ castData }) => {
  return (
    <CastContainer>
      {castData.data?.cast?.map((data) => (
        <CastItem key={data.cast_id} profilePath={data.profile_path} name={data.name} character={data.character} />
      ))}
    </CastContainer>
  );
};

export default CastList;
