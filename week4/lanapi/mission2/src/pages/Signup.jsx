// import styled from 'styled-components';

// const Signup = () => {
//     return (
//         <WhiteHeading>회원가입 페이지</WhiteHeading>
//     );
// };

// export default Signup;

// const WhiteHeading = styled.h1`
//     color: white;
// `


import styled from 'styled-components';

const SignUpForm = () => {
    return (
        <Wrapper>
            <FormContainer>
                <Title>회원가입 페이지</Title>
                <Form>
                    <FieldContainer>
                        <TextInput type="email" placeholder="이메일을 입력해주세요!" />
                        <ErrorText>이메일 오류 메시지</ErrorText>
                    </FieldContainer>

                    <FieldContainer>
                        <TextInput type="password" placeholder="비밀번호를 입력해주세요!" />
                        <ErrorText>비밀번호 오류 메시지</ErrorText>
                    </FieldContainer>

                    <FieldContainer>
                        <TextInput type="password" placeholder="비밀번호를 다시 입력해주세요!" />
                        <ErrorText>비밀번호 확인 오류 메시지</ErrorText>
                    </FieldContainer>

                    <SubmitButton type="submit" value="회원가입" />
                </Form>
            </FormContainer>
        </Wrapper>
    );
};

export default SignUpForm;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* 화면 전체 높이를 사용하여 중앙 정렬 */
    width: 100vw; /* 화면 전체 너비 */
    background-color: #282c34;
    box-sizing: border-box;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 450px; /* 고정된 너비 */
    padding: 20px;
    background-color: white;
    border-radius: 10px 0px 0px 0px; /* 모서리 둥글게 */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
    opacity: 1; /* 폼이 보이도록 설정 */
`;

const Title = styled.h1`
    color: #282c34;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0px;
`;

const FieldContainer = styled.div`
    margin-bottom: 15px;
    width: 100%;
`;

const TextInput = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const ErrorText = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 5px;
`;

const SubmitButton = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background-color: #61dafb;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;

    &:disabled {
        background-color: #ccc;
    }
`;
