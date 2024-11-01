import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../components/input';

const Signup = () => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email('올바른 이메일 형식이 아닙니다')
            .required('이메일을 반드시 입력해주세요'),
        password: yup
            .string()
            .min(8, '비밀번호는 8자 이상이어야 합니다')
            .max(16, '비밀번호는 16자 이하여야 합니다')
            .required('비밀번호를 반드시 입력해주세요'),
        passwordCheck: yup
            .string()
            .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다')
            .required('비밀번호를 다시 입력해주세요')
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log('회원가입 데이터:', data);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 60px)',
            backgroundColor: '#141414',
            width: '100%'
        }}>
            <div style={{ 
                width: '400px',
                marginTop: '-100px',
                textAlign: 'center'
            }}>
                <h2 style={{
                    color: 'white',
                    fontSize: '32px',
                    marginBottom: '32px',
                    textAlign: 'center'
                }}>회원가입</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    <Input
                        type="email"
                        placeholder="이메일을 입력해주세요!"
                        register={register}
                        id="email"
                        error={errors.email}
                    />

                    <Input
                        type="password"
                        placeholder="비밀번호를 입력해주세요!"
                        register={register}
                        id="password"
                        error={errors.password}
                    />

                    <Input
                        type="password"
                        placeholder="비밀번호를 다시 입력해주세요!"
                        register={register}
                        id="passwordCheck"
                        error={errors.passwordCheck}
                    />

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            height: '52px',
                            border: 'none',
                            borderRadius: '4px',
                            backgroundColor: isValid ? '#f93063' : '#666',
                            color: 'white',
                            fontSize: '16px',
                            cursor: isValid ? 'pointer' : 'not-allowed',
                            transition: 'background-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            if (isValid) {
                                e.target.style.backgroundColor = '#0350a8';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (isValid) {
                                e.target.style.backgroundColor = '#f93063';
                            }
                        }}
                        disabled={!isValid}
                    >
                        제출
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;