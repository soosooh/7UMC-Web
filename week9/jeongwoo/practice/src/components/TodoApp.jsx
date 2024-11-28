import React from 'react';
import styled from 'styled-components';
import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';

const Container = styled.div`
  width: 500px;
  height: 600px;
  background: #FFFFFF;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`;

const DateInfo = styled.div`
  h1 {
    font-size: 28px;
    margin: 0;
    font-weight: 500;
  }
  p {
    margin: 4px 0 0;
    color: #666;
    font-size: 16px;
  }
`;

const Time = styled.span`
  color: #666;
  font-size: 18px;
  font-weight: 500;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const TodoApp = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = () => {
    return `${time.getFullYear()}년 ${time.getMonth() + 1}월 ${time.getDate()}일`;
  };

  const formatTime = () => {
    return time.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const getDayOfWeek = () => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return `${days[time.getDay()]}요일`;
  };

  return (
    <Container>
      <Header>
        <DateInfo>
          <h1>{formatDate()}</h1>
          <p>{getDayOfWeek()}</p>
        </DateInfo>
        <Time>{formatTime()}</Time>
      </Header>
      <TodoInput />
      <Content>
        <TodoList />
      </Content>
    </Container>
  );
};

export default TodoApp;