import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    background-color: #444;
  }
  50% {
    background-color: #555;
  }
  100% {
    background-color: #444;
  }
`;

const Card = styled.div`
  width: 195px;
  height: 329px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

const SkeletonPoster = styled.div`
  width: 100%;
  height: 280px;
  background-color: #555;
  border-radius: 10px 10px 0 0;
  margin-bottom: 5px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const SkeletonTitle = styled.div`
  width: 195px;
  height: 15px;
  background-color: #666;
  margin: 5px 0;
  border-radius: 5px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const SkeletonDate = styled.div`
  width: 195px;
  height: 12px;
  background-color: #666;
  margin-bottom: 5px;
  border-radius: 5px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const SkeletonCard = () => (
  <Card>
    <SkeletonPoster />
    <SkeletonTitle />
    <SkeletonDate />
  </Card>
);

export default SkeletonCard;
