import styled from '@emotion/styled';  

const StyledButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #FEE500;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 20px; // 좌우 패딩 추가
  cursor: pointer;
  margin-top: 10px;
  position: relative; // 아이콘 위치 조정을 위해 추가
`;

const ChatIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: #000000;
  opacity: 0.85;
  position: absolute;
  left: 20px; // 왼쪽에 고정
`;

const ButtonText = styled.span`
  flex: 1;
  text-align: center;
  font-weight: 600; // 글씨 진하게
  color: #000000;
  font-size: 15px;
  margin-left: 20px; // 아이콘과의 간격 조정
`;

const KakaoButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <ChatIcon viewBox="0 0 24 24">
        <path d="M12 3C6.48 3 2 6.48 2 11c0 2.7 1.46 5.09 3.69 6.55L4.97 21l4.72-2.7C10.43 18.43 11.2 18.5 12 18.5c5.52 0 10-3.48 10-8C22 6.48 17.52 3 12 3z"/>
      </ChatIcon>
      <ButtonText>카카오로 시작하기</ButtonText>
    </StyledButton>
  );
};

export default KakaoButton;