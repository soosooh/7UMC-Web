import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleAuthCode } from '../../context/AuthLKakao'; // 경로는 실제 파일 위치에 맞게 조정
  
const AuthHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    handleAuthCode(navigate);
  }, [navigate]);

  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh'
    }}>
      <div style={{
        fontSize: '1.125rem', 
        fontWeight: '600'
      }}>
        로그인 중입니다...
      </div>
    </div>
  );
};

export default AuthHandler;