import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

const SkeletonCardContainer = styled.div`
  width: 15vw;
  height: 22vw;
  display: flex;
  flex-direction: column;
  background-color: #333;
  border-radius: 0.5vw;
  margin: 1vh;
  overflow: hidden;
`;

const SkeletonPoster = styled.div`
  width: 100%;
  height: 80%;
  background: linear-gradient(
    to right,
    #e0e0e0 0%,
    #c0c0c0 50%,
    #e0e0e0 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;

const SkeletonText = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  padding: 1vh;
`;

const SkeletonTitle = styled.div`
  width: 80%;
  height: 1.8vh;
  background: linear-gradient(
    to right,
    #e0e0e0 0%,
    #c0c0c0 50%,
    #e0e0e0 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  margin-bottom: 0.5vh;
  border-radius: 4px;
`;

const SkeletonDate = styled.div`
  width: 60%;
  height: 1.5vh;
  background: linear-gradient(
    to right,
    #e0e0e0 0%,
    #c0c0c0 50%,
    #e0e0e0 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
`;

const SkeletonCard = () => {
  return (
    <SkeletonCardContainer>
      <SkeletonPoster />
      <SkeletonText>
        <SkeletonTitle />
        <SkeletonDate />
      </SkeletonText>
    </SkeletonCardContainer>
  );
};

export default SkeletonCard;
