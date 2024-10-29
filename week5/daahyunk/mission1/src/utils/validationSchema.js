import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .required("이메일은 필수 입력 요소입니다.") 
    .matches(
      /^[\w-]+(\.[\w-]+)*@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z]{2,}$/,
      "유효한 이메일 형식이 아닙니다."
    ),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 요소입니다.")
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .max(16, "비밀번호는 16자 이하여야 합니다."),
  passwordCheck: yup
    .string()
    .required("비밀번호 확인은 필수 입력 요소입니다.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});
