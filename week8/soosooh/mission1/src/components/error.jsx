import { BounceLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div``;

const Error = () => {
  return (
    <Container>
      <BounceLoader color="#FF0000" />
      <text>X</text>
    </Container>
  );
};

export default Error;
