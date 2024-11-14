import styled from "styled-components";
import CastItem from "./CastItem";

const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  color: white;
  gap: 20px; /* 카드 간격 추가 */

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); /* 그리드로 변경하여 반응형 출력 */
    justify-content: center;
    gap: 15px; /* 모바일에서 간격 조정 */
  }
`;

const CastList = ({ castData }) => {
  return (
    <CastContainer>
      {castData?.cast?.map((data) => (
        <CastItem key={data.cast_id} profilePath={data.profile_path} name={data.name} character={data.character} />
      ))}
    </CastContainer>
  );
};

export default CastList;
