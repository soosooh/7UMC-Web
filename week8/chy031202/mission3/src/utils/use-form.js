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


    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출')
        console.log(data);
    }

    return { register, handleSubmit, errors, isValid};

}

export default useFormCo;
