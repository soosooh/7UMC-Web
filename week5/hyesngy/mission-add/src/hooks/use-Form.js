import { useForm } from 'react-hook-form';
import { nan, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const getSchema = (type) => {
  const baseSchema = {
    email: z
      .string()
      .email('유효한 이메일 주소를 입력해주세요.')
      .min(1, '이메일을 입력해주세요!'),

    password: z
      .string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하여야 합니다.')
  };

  if (type === 'signup') {
    baseSchema.name = z
      .string()
      .min(1, '이름을 입력해주세요!');

    baseSchema.age = z
      .number({
        invalid_type_error: '나이를 입력해주세요!',
        required_error: '나이를 입력해주세요!'
      })
      .min(1, '나이를 다시 입력해주세요.')
      .max(120, '나이를 다시 입력해주세요.')
      .int('나이는 정수여야 합니다.')

      
      baseSchema.confirmPassword = z
      .string()
      .min(1, '비밀번호 확인을 입력해주세요!');

      return z.object(baseSchema).superRefine((data, ctx) => {
        if (data.password !== data.confirmPassword) {
          ctx.addIssue({
            path: ['confirmPassword'],
            message: '비밀번호가 일치하지 않습니다.',
          });
        }
    });
  }

  return z.object(baseSchema);
};

export const useAuthForm = (type) => {
  return useForm({
    resolver: zodResolver(getSchema(type)),
    mode: 'onChange',
  });
};