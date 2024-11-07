import { z } from "zod";

// 스키마 정의
const namePattern = /^[A-Za-z가-힣]+$/;
const signUpSchema = z
  .object({
    name: z
      .string()
      .min(1, "필수항목입니다.")
      .regex(namePattern, "이름은 특수문자나 숫자를 포함할 수 없습니다."),
    email: z
      .string()
      .min(1, "필수항목입니다.")
      .email("올바른 이메일 형식이 아닙니다. 다시 확인해주세요!"),
    password: z
      .string()
      .min(8, "비밀번호는 8-16자 사이로 입력해주세요!")
      .max(16, "비밀번호는 8-16자 사이로 입력해주세요!"),
    passwordCheck: z.string().min(1, "필수항목입니다."),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordCheck"],
  });

// loginSchema를 별도로 정의 (passwordCheck 제외)
const loginSchema = z.object({
  name: z
    .string()
    .min(1, "필수항목입니다.")
    .regex(namePattern, "이름은 특수문자나 숫자를 포함할 수 없습니다."),
  email: z
    .string()
    .min(1, "필수항목입니다.")
    .email("올바른 이메일 형식이 아닙니다. 다시 확인해주세요!"),
  password: z
    .string()
    .min(8, "비밀번호는 8-16자 사이로 입력해주세요!")
    .max(16, "비밀번호는 8-16자 사이로 입력해주세요!"),
});

// 유효성 검사 함수들
function validateSignUp(values) {
  const validation = signUpSchema.safeParse(values);
  const errors = {};

  if (!validation.success) {
    validation.error.errors.forEach((error) => {
      errors[error.path[0]] = error.message;
    });
  }

  return errors;
}

function validateLogin(values) {
  const validation = loginSchema.safeParse(values);
  const errors = {};

  if (!validation.success) {
    validation.error.errors.forEach((error) => {
      errors[error.path[0]] = error.message;
    });
  }

  return errors;
}

export { validateLogin, validateSignUp };
