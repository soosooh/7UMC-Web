import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const TimeContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5vw;
    padding: 1vw 0;
`;

const TopContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`;

const TimeP = styled.p`
    font-size: 1.2vw;
    font-weight: bold;
    font-style: italic;
    color: ${colors.black};
`;

const TimeP2 = styled(TimeP)`
    font-style: none;
    color: ${colors.timeColor};
`;

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const year = currentTime.getFullYear();
    const month = currentTime.getMonth() + 1;
    const day = currentTime.getDate();

    const dayOfWeek = currentTime.getDay();
    const daysOfWeek = [
        "일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"
    ];

    const formattedDate = `${year}년 ${month}월 ${day}일`;

    return (
        <TimeContainer>
            <TopContainer>
                <TimeP>{formattedDate}</TimeP>
                <TimeP>{`${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</TimeP>
            </TopContainer>
            <TopContainer>
                <TimeP2>{daysOfWeek[dayOfWeek]}</TimeP2>
            </TopContainer>
        </TimeContainer>
    );
};

export default Time;
