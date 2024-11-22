import { SyncLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div``;
const LoadingText = styled.p``;
const Loading = () => {
  return (
    <Container>
      <SyncLoader color="5B92E4" />
      <LoadingText>로딩중입니다...</LoadingText>
    </Container>
  );
};

export default Loading;
