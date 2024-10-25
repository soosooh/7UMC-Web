import styled from "styled-components";

const LoginPageContainer = styled.div`
  width: 100%; 
  height: 100%;
  color: white;
  padding: 2rem; 
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <h1>로그인 페이지</h1>
    </LoginPageContainer>
  );
};

export default LoginPage;
