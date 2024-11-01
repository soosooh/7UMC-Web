import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
const LogInContainer = styled.div`
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
  border: white
  border-radius: 8px;
`;

const StyledSubmit = styled.input`
  width: 450px;
  height: 50px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: ${({ disabled }) => (disabled ? "gray" : "#ff073d")};
  border: ${({ disabled }) => (disabled ? "gray" : "#ff073d")};
  border-radius: 8px;
`;

const LogIn = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("올바른 이메일 형식이 아닙니다. 다시 확인해주세요!")
      .required("이메일을 반드시 입력해주세요."),
    password: yup
      .string()
      .min(8, "비밀번호는 8~16자 사이로 입력해주세요!")
      .max(16, "비밀번호는 8~16자 사이로 입력해주세요!")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  return (
    <LogInContainer>
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
        <p style={{ color: "red" }}> {errors.password?.message}</p>
        <StyledSubmit type={"submit"} disabled={isValid === false} />
      </form>
    </LogInContainer>
  );
};

export default LogIn;
