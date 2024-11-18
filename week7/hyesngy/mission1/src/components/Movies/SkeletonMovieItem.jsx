import styled, { keyframes } from 'styled-components';

const SkeletonMovieItem = () => {
  return (
    <SkeletonContainer>
      <SkeletonPoster />
      <SkeletonInfo />
      <SkeletonInfo2 />
    </SkeletonContainer>
  );
};

export default SkeletonMovieItem;

const SkeletonAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #c0c0c0;
  }
`
const SkeletonContainer = styled.div`
  position: relative;
  width: 171px;
  height: 329px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #000;
`
const SkeletonPoster = styled.div`
  width: 171px;
  height: 251.59px;
  border-radius: 10px;
  animation: ${SkeletonAnimation} 0.75s infinite ease-in-out alternate;
`
const SkeletonInfo = styled.div`
  width: 171px;
  height: 25px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem 0;
  box-sizing: border-box;
    border-radius: 10px;
  animation: ${SkeletonAnimation} 0.75s infinite ease-in-out alternate;
`
const SkeletonInfo2 = styled(SkeletonInfo)`
  height: 18.41px;
`