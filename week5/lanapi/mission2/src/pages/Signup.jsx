import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styled from 'styled-components';

// 2015년 1월 1일 이후 출생자만 가입 가능하게 설정
const signupSchema = z
  .object({
    email: z.string().email('유효하지 않은 이메일 형식입니다.').nonempty('이메일은 필수 입력 사항입니다.'),
    password: z.string().min(8, '비밀번호는 8자리 이상이어야 합니다.').max(16, '비밀번호는 16자리 이하이어야 합니다.'),
    passwordCheck: z.string().nonempty('비밀번호 확인은 필수 입력 사항입니다.'),
    gender: z.enum(['남성', '여성'], '성별을 선택해주세요'),
    birthDate: z
      .string()
      .nonempty('생년월일은 필수 입력 사항입니다.')
      .refine((val) => {
        const selectedDate = new Date(val);
        const limitDate = new Date('2015-01-01');
        return selectedDate >= limitDate;
      }, {
        message: '2015년 1월 1일 이후로 태어난 사람만 회원가입이 가능합니다.',
      }),
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

  const SignupBox = (userData) => {
    console.log('회원 데이터:', userData);
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

          {/* 성별 추가 */}
          <FieldContainer>
            <SelectInput {...register("gender")}>
              <option value="">성별을 선택해주세요</option>
              <option value="남성">남성</option>
              <option value="여성">여성</option>
            </SelectInput>
            <ErrorText>{errors.gender?.message}</ErrorText>
          </FieldContainer>

          {/* 생년월일 추가 */}
          <FieldContainer>
            <TextInput 
              type="date" 
              placeholder="생년월일을 입력해주세요" 
              {...register("birthDate")} 
            />
            <ErrorText>{errors.birthDate?.message}</ErrorText>
          </FieldContainer>

          <SignupButton type="submit" value="회원가입" disabled={!isValid} />
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

export default SignUp;

// 스타일 정의
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
  position: relative;
  left: -160px; 
  top: -100px; 
`;

const Title = styled.h1`
  color: white;
  width: 100%;
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

const SelectInput = styled.select`
  width: 105%;
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
  width: 474px;
  height: 50px;
  padding: 10px;
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
