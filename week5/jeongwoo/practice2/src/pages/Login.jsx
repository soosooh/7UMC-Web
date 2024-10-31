import { useForm } from '../hooks/useForm';
import { validateLogin } from '../utils/validate';

const Login = () => {
    const initialValues = {
        email: '',
        password: ''
    };

    const { values, errors, touched, getTextInputProps } = useForm(
        initialValues,
        validateLogin
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('로그인 데이터:', values);
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
                
                <form onSubmit={handleSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    <div>
                        <input
                            type="email"
                            placeholder="이메일을 입력해주세요!"
                            style={{
                                width: '100%',
                                height: '52px',
                                padding: '0 16px',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '16px',
                                boxSizing: 'border-box'
                            }}
                            {...getTextInputProps('email')}
                        />
                        {touched.email && errors.email && (
                            <p style={{ color: 'red', textAlign: 'left', marginTop: '8px', fontSize: '14px' }}>
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="비밀번호를 입력해주세요!"
                            style={{
                                width: '100%',
                                height: '52px',
                                padding: '0 16px',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '16px',
                                boxSizing: 'border-box'
                            }}
                            {...getTextInputProps('password')}
                        />
                        {touched.password && errors.password && (
                            <p style={{ color: 'red', textAlign: 'left', marginTop: '8px', fontSize: '14px' }}>
                                {errors.password}
                            </p>
                        )}
                    </div>

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