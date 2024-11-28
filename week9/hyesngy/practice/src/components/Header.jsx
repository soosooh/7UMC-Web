import React from 'react';
import styled from "styled-components";
import { useState, useEffect } from 'react';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 5px solid #f4f4f9;
`
const Datediv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const DateP = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;

`
const TimeP = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin: 0;
`
const DayP = styled.p`
  font-size: 1rem;
  color: gray;
`
const Header = () => {
  const daysOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = `${currentTime.getFullYear()}년 ${currentTime.getMonth() + 1}월 ${currentTime.getDate()}일`;
  const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  const day = `${daysOfWeek[currentTime.getDay()]}`;

  return (
    <>
      <HeaderContainer>
        <Datediv>
          <DateP>{formattedDate}</DateP>
          <TimeP>{formattedTime}</TimeP>
        </Datediv>
        <DayP>{day}</DayP>
      </HeaderContainer>
    </>
  );
};

export default Header;