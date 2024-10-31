// 로그인 페이지 컴포넌트
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
    // 유효성 검사 스키마 정의
    const schema = yup.object().shape({
        email: yup
            .string()
            .email('올바른 이메일 형식이 아닙니다')
            .required('이메일을 입력해주세요'),
        password: yup
            .string()
            .min(8, '비밀번호는 8자 이상이어야 합니다')
            .max(16, '비밀번호는 16자 이하여야 합니다')
            .required('비밀번호를 입력해주세요'),
    });

    // react-hook-form 설정 및 초기화
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, touchedFields }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange', // 실시간 유효성 검사 설정
        defaultValues: {
            email: '',
            password: ''
        }
    });

    // 폼 제출 핸들러
    const onSubmit = (data) => {
        console.log('로그인 데이터:', data);
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
                }}>로그인</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    {/* 이메일 입력 필드 */}
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
                            {...register("email")}
                        />
                        {/* 이메일 에러 메시지 - touched일 때만 표시 */}
                        {touchedFields.email && errors.email && (
                            <p style={{ color: 'red', textAlign: 'left', marginTop: '8px', fontSize: '14px' }}>
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* 비밀번호 입력 필드 */}
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
                            {...register("password")}
                        />
                        {/* 비밀번호 에러 메시지 - touched일 때만 표시 */}
                        {touchedFields.password && errors.password && (
                            <p style={{ color: 'red', textAlign: 'left', marginTop: '8px', fontSize: '14px' }}>
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* 로그인 버튼 - 유효성 검사 통과 시에만 활성화 */}
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
                            transition: 'background-color 0.3s ease', // 부드러운 색상 전환 효과
                            ':hover': isValid ? {
                                backgroundColor: '#0350a8'
                            } : undefined
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