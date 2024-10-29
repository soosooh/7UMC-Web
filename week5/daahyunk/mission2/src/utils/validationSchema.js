// src/utils/validationSchema.js
import { z } from "zod";

export const signupSchema = z.object({
  email: z
    .string()
    .min(1, { message: "이메일은 필수 입력 요소입니다." })
    .email("유효한 이메일 형식이 아닙니다."),
  password: z
    .string()
    .min(8, { message: "비밀번호는 8자 이상이어야 합니다." })
    .max(16, { message: "비밀번호는 16자 이하여야 합니다." }),
  birthDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "유효한 생년월일 형식이 아닙니다. (YYYY-MM-DD)" })
    .min(1, { message: "생년월일은 필수 입력 요소입니다." }),
  phoneNumber: z
    .string()
    .regex(/^010-\d{4}-\d{4}$/, { message: "유효한 전화번호 형식이 아닙니다. (010-XXXX-XXXX)" })
    .min(1, { message: "전화번호는 필수 입력 요소입니다." }),
});
