import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
const SignUp = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("유효한 이메일 형식이어야 합니다.")
      .required("이메일을 반드시 입력해주세요."),
    password: yup
      .string()
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .max(16, "비밀번호는 16자 이하여야 합니다.")
      .required("비밀번호를 반드시 입력해주세요."),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호 검증 또한 필수 입력요소입니다"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  return (
    <SignUpContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type={"email"}
          placeholder="이메일을 입력해주세요!"
          {...register("email")}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <StyledInput
          type={"password"}
          placeholder="비밀번호를 입력해주세요!"
          {...register("password")}
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <StyledInput
          type={"password"}
          placeholder="비밀번호를 다시 입력해주세요!"
          {...register("passwordCheck")}
        />
        <p style={{ color: "red" }}>{errors.passwordCheck?.message}</p>
        <StyledSubmit type={"submit"} value="가입하기" />
      </form>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 35%;
  left: 40%;
`;
const StyledInput = styled.input`
  width: 450px;
  height: 50px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: gray;
  border-radius: 8px;
  background-color: white;
  color: black;
`;

const StyledSubmit = styled.input`
  width: 450px;
  height: 50px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: #ff073d;
  border: #ff073d;
  border-radius: 8px;
`;
