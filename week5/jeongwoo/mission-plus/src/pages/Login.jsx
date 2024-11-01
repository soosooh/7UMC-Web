import { useForm } from '../hooks/useForm';
import { validateLogin } from '../utils/validate';
import Input from '../components/input';

const Login = () => {
    const initialValues = {
        email: '',
        password: ''
    };

    const { values, errors, touched, register, handleSubmit } = useForm(
        initialValues,
        validateLogin
    );

    const onSubmit = (data) => {
        console.log('로그인 데이터:', data);
    };

    const isValid = Object.keys(errors).length === 0 
                   && values.email !== '' 
                   && values.password !== '';

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
                }}>로그인</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    <Input
                        type="email"
                        label="이메일"
                        placeholder="이메일을 입력해주세요!"
                        id="email"
                        register={register}
                        error={touched.email && errors.email}
                    />

                    <Input
                        type="password"
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요!"
                        id="password"
                        register={register}
                        error={touched.password && errors.password}
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
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;