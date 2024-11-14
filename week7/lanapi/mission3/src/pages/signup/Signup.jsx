import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signUp } from '../../api/apiClient';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const signupSchema = z
  .object({
    email: z.string().email('유효하지 않은 이메일 형식입니다.').nonempty('이메일은 필수 입력 사항입니다.'),
    password: z.string().min(8, '비밀번호는 8자리 이상이어야 합니다.').max(16, '비밀번호는 16자리 이하이어야 합니다.'),
    passwordCheck: z.string().nonempty('비밀번호 확인은 필수 입력 사항입니다.'),
  })
  .superRefine(({ password, passwordCheck }, ctx) => {
    if (password !== passwordCheck) {
      ctx.addIssue({
        path: ['passwordCheck'],
        message: '비밀번호가 일치하지 않습니다.',
      });
    }
  });

const SignUp = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: zodResolver(signupSchema),
    mode: 'all'
  });
  const navigate = useNavigate();

  const SignupBox = async (userData) => {
    console.log("회원가입 요청 데이터:", userData); // 요청 데이터 확인

    try {
      const response = await signUp({
        email: userData.email,
        password: userData.password,
        passwordCheck: userData.passwordCheck,
      });

      console.log("서버 응답:", response); // 서버 응답 확인

      if (response) {
        alert("회원가입이 완료되었습니다!");
        navigate("/login"); 
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      console.log("오류 응답 데이터:", error.response?.data); // 오류 응답 확인
      alert("회원가입에 실패했습니다. 네트워크 연결을 확인해주세요.");
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <Title>회원가입</Title>
        <Form onSubmit={handleSubmit(SignupBox)}>
          <FieldContainer>
            <TextInput 
              type="email" 
              placeholder="이메일을 입력해주세요" 
              {...register("email")} 
            />
            <ErrorText>{errors.email?.message}</ErrorText>
          </FieldContainer>

          <FieldContainer>
            <TextInput 
              type="password" 
              placeholder="비밀번호를 입력해주세요" 
              {...register("password")} 
            />
            <ErrorText>{errors.password?.message}</ErrorText>
          </FieldContainer>

          <FieldContainer>
            <TextInput 
              type="password" 
              placeholder="비밀번호를 한번 더 입력해주세요" 
              {...register("passwordCheck")} 
            />
            <ErrorText>{errors.passwordCheck?.message}</ErrorText>
          </FieldContainer>

          <SignupButton type="submit" value="회원가입" disabled={!isValid} />
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

export default SignUp;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #202832;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  padding: 20px;
  background-color: #202832;
  border-radius: 10px; 
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FieldContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 5px;
`;

const ErrorText = styled.p`
  color: #FF073D; 
  font-size: 14px;
  margin-top: 5px;
`;

const SignupButton = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? '#413F3F' : '#FF073D')}; 
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: #FFFFFF;

  &:hover {
    background-color: ${(props) => !props.disabled && '#000000'}; 
  }
`;
