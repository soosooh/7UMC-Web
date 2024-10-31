import { useForm } from '../hooks/useForm';
import { validateSignup } from '../utils/validate';
import Input from '../components/input';
import { z } from 'zod';  // zod import 추가

const Signup = () => {
    // 이메일 검증을 위한 zod 스키마
    const emailSchema = z.string()
        .min(1, '이메일을 입력해주세요')
        .email('올바른 이메일 형식이 아닙니다');

    const initialValues = {
        email: '',
        password: '',
        passwordCheck: '',
        nickname: '',
        birthDate: '',
        gender: '',
        phoneNumber: ''
    };

    const { values, errors, touched, register, handleSubmit } = useForm(
        initialValues,
        // validateSignup 함수 수정하여 이메일은 zod로 검증
        (values) => {
            const errors = validateSignup(values);  // 기존 검증

            // 이메일 필드만 zod로 추가 검증
            try {
                emailSchema.parse(values.email);
            } catch (zodError) {
                errors.email = zodError.errors[0].message;
            }

            return errors;
        }
    );

    const onSubmit = (data) => {
        // 제출 전 최종 이메일 검증
        try {
            emailSchema.parse(data.email);
            console.log('회원가입 데이터:', data);
        } catch (zodError) {
            console.error('이메일 검증 실패:', zodError.errors[0].message);
        }
    };

    const isValid = Object.keys(errors).length === 0 
                   && Object.values(values).every(value => value !== '');

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
                marginTop: '-40px',
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
                    {/* 이메일 필드는 zod로 검증됩니다 */}
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

                    <Input
                        type="password"
                        label="비밀번호 확인"
                        placeholder="비밀번호를 다시 입력해주세요!"
                        id="passwordCheck"
                        register={register}
                        error={touched.passwordCheck && errors.passwordCheck}
                    />

                    <Input
                        type="text"
                        label="닉네임"
                        placeholder="닉네임을 입력해주세요"
                        id="nickname"
                        register={register}
                        error={touched.nickname && errors.nickname}
                    />

                    <Input
                        type="date"
                        label="생년월일"
                        id="birthDate"
                        register={register}
                        error={touched.birthDate && errors.birthDate}
                    />

                    <Input
                        type="select"
                        label="성별"
                        id="gender"
                        register={register}
                        error={touched.gender && errors.gender}
                    >
                        <option value="">성별을 선택해주세요</option>
                        <option value="male">남성</option>
                        <option value="female">여성</option>
                        <option value="other">기타</option>
                    </Input>

                    <Input
                        type="tel"
                        label="전화번호"
                        placeholder="전화번호를 입력해주세요 (010-1234-5678)"
                        id="phoneNumber"
                        register={register}
                        error={touched.phoneNumber && errors.phoneNumber}
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
                        가입하기
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;