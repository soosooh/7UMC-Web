import React from 'react';
import LoginItem from './LoginItem'; // 로그인 아이템 불러오기
import styled from 'styled-components';

const LoginList = ({ register, errors, isValid }) => (
  <>
    <LoginItem 
      type="email" 
      placeholder="이메일을 입력해주세요" 
      register={register("email")} 
      error={errors.email?.message} 
    />
    <LoginItem 
      type="password" 
      placeholder="비밀번호를 입력해주세요" 
      register={register("password")} 
      error={errors.password?.message} 
    />
    <LoginButton type="submit" disabled={!isValid}>로그인</LoginButton>
  </>
);

export default LoginList;

const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? '#413F3F' : '#FF073D')};
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: #FFFFFF;

  &:hover {
    background-color: ${(props) => !props.disabled && '#000000'};
  }

  @media (max-width: 768px) {
    height: 45px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 12px;
  }
`;



// import React from 'react';
// import styled from 'styled-components';
// import LoginItem from './LoginItem';

// const LoginList = ({ register, touchedFields, errors }) => (
//     <Form>
//         <LoginItem
//             type="email"
//             placeholder="이메일 주소를 입력하세요."
//             register={register("email")}
//             isTouched={touchedFields.email}
//             error={errors.email?.message}
//         />
//         <LoginItem
//             type="password"
//             placeholder="비밀번호를 입력하세요."
//             register={register("password")}
//             isTouched={touchedFields.password}
//             error={errors.password?.message}
//         />
//     </Form>
// );

// export default LoginList;

// const Form = styled.form`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     max-width: 400px;
//     padding: 20px;
//     box-sizing: border-box;

//     @media (max-width: 768px) {
//         max-width: 90%;  // 모바일에서는 너비를 90%로 설정
//         padding: 15px;  // 여백 조정
//     }

//     @media (max-width: 480px) {
//         max-width: 85%;  // 더 작은 모바일 화면에서는 너비를 더 줄임
//         padding: 10px;  // 여백을 더 줄임
//     }
// `;
