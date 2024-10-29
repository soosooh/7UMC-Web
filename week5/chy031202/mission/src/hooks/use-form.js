import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

function useFormCo() {
    const schema = yup.object().shape({
        email: yup.string().email('올바른 형식이 아닙니다.').required('이메일을 반드시 입력해주세요.'),
        password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required(),
        passwordCheck: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.').required(),
        nickname: yup.string().required('닉네임을 필수로 입력해 주세요.')
            .max(12, '닉네임은 12자 이내로 적어주세요.'),
        gender:
        yup.string().oneOf(['F', 'M'], 'F/M 둘 중 하나 입력'),
    })

    const zodschema = z.object({
        email: z.string().email('올바른 형식이 아닙니다.').nonempty('이메일을 반드시 입력해주세요.'),
        password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.'),
        passwordCheck: z.string().nonempty('비밀번호 확인을 입력해주세요.'),
        nickname: z.string().nonempty('닉네임을 필수로 입력해 주세요.').max(12, '닉네임은 12자 이내로 적어주세요.'),
        gender: z.enum(['F', 'M'], { message: 'F/M 둘 중 하나 입력' })
    }).superRefine((data, ctx) => {
        if (data.password !== data.passwordCheck) {
            ctx.addIssue({
                path: ['passwordCheck'],
                message: '비밀번호가 일치하지 않습니다.',
            });
        }
    });

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: zodResolver(zodschema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출')
        console.log(data);
    }

    return { register, handleSubmit, errors, isValid, onSubmit };

}

export default useFormCo;
