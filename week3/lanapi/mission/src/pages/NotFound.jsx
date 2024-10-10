import styled from 'styled-components';

const NotFound = () => {
    return (
      <Container>
      <WhiteHeading>요청하신 페이지를 찾을 수 없습니다.</WhiteHeading>
      <WhiteText>해당 페이지의 링크를 확인해주세요.</WhiteText>
  </Container>
    );
};

export default NotFound;

const WhiteHeading = styled.h1`
    color: white;
`