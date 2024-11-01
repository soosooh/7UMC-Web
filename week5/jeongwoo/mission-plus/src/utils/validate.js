// 이메일 검증을 위한 정규 표현식
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// 전화번호 검증을 위한 정규 표현식 (010-1234-5678 형식)
const phonePattern = /^01[0-9]-\d{4}-\d{4}$/;

/**
 * 회원가입 폼 유효성 검사
 * @param {Object} values - 폼 입력 값들
 * @returns {Object} 에러 메시지 객체
 */
export const validateSignup = (values) => {
    const errors = {};

    // 이메일 검증
    if (!values.email) {
        errors.email = '이메일을 입력해주세요';
    } else if (!emailPattern.test(values.email)) {
        errors.email = '올바른 이메일 형식이 아닙니다';
    }

    // 비밀번호 검증
    if (!values.password) {
        errors.password = '비밀번호를 입력해주세요';
    } else if (values.password.length < 8) {
        errors.password = '비밀번호는 8자 이상이어야 합니다';
    } else if (values.password.length > 16) {
        errors.password = '비밀번호는 16자 이하여야 합니다';
    }

    // 비밀번호 확인 검증
    if (!values.passwordCheck) {
        errors.passwordCheck = '비밀번호를 다시 입력해주세요';
    } else if (values.password !== values.passwordCheck) {
        errors.passwordCheck = '비밀번호가 일치하지 않습니다';
    }

    // 닉네임 검증
    if (!values.nickname) {
        errors.nickname = '닉네임을 입력해주세요';
    } else if (values.nickname.length < 2) {
        errors.nickname = '닉네임은 2자 이상이어야 합니다';
    } else if (values.nickname.length > 10) {
        errors.nickname = '닉네임은 10자 이하여야 합니다';
    }

    // 생년월일 검증
    if (!values.birthDate) {
        errors.birthDate = '생년월일을 입력해주세요';
    } else {
        const birthDate = new Date(values.birthDate);
        const today = new Date();
        if (birthDate > today) {
            errors.birthDate = '올바른 생년월일을 입력해주세요';
        }
    }

    // 성별 검증
    if (!values.gender) {
        errors.gender = '성별을 선택해주세요';
    } else if (!['male', 'female', 'other'].includes(values.gender)) {
        errors.gender = '올바른 성별을 선택해주세요';
    }

    // 전화번호 검증
    if (!values.phoneNumber) {
        errors.phoneNumber = '전화번호를 입력해주세요';
    } else if (!phonePattern.test(values.phoneNumber)) {
        errors.phoneNumber = '올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)';
    }

    return errors;
};

/**
 * 로그인 폼 유효성 검사
 * @param {Object} values - 폼 입력 값들
 * @returns {Object} 에러 메시지 객체
 */
export const validateLogin = (values) => {
    const errors = {};

    // 이메일 검증
    if (!values.email) {
        errors.email = '이메일을 입력해주세요';
    } else if (!emailPattern.test(values.email)) {
        errors.email = '올바른 이메일 형식이 아닙니다';
    }

    // 비밀번호 검증
    if (!values.password) {
        errors.password = '비밀번호를 입력해주세요';
    } else if (values.password.length < 8 || values.password.length > 16) {
        errors.password = '비밀번호는 8자 이상 16자 이하여야 합니다';
    }

    return errors;
};