import styled from "styled-components";

const SkeletonHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: calc(100vw - 180px);
  height: 400px;
  background-color: gray;
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  color: white;
`;

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
const CardContainer = styled.div`
  width: 130px;
  margin-left: 10px;
`;
const ProfileImage = styled.div`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
  background-color: black;
  background-image: ${({ src }) => (src ? `url(${src})` : "none")};
  background-size: cover;
  background-position: center;
  border: 2px solid white;
`;
const PContainer = styled.div`
  flex-direction: column;
`;
const StyledP = styled.p`
  font-size: 12px;
`;

const SkeletonCredit = () => {
  return (
    <>
      <SkeletonHeader />
      <CreditTitle>감독/출연</CreditTitle>
      <CreditContainer>
        <CardContainer>
          <ProfileImage />
          <PContainer>
            <StyledP />
            <StyledP />
          </PContainer>
        </CardContainer>
      </CreditContainer>
    </>
  );
};

export default SkeletonCredit;
