import React, {useState, useEffect} from "react";
import styled from "styled-components";

function DateTimeDisplay(){
    const [date, setDate] = useState(new Date());

        useEffect(() => {
            const interval = setInterval(() => {
            setDate(new Date());
            }, 1000);
        
            return () => clearInterval(interval);
        }, []);

            // 날짜 포맷
    const formattedDate = date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

     // 요일 포맷
    const formattedDay = date.toLocaleDateString("ko-KR", { weekday: "long" });

    return (
            <Wrapp>
                <Dates>
                    <span style={{fontWeight: "bold"}}>{formattedDate}</span>
                    <span>{formattedTime}</span>
                </Dates>
                <Span>{formattedDay}</Span>
                
            </Wrapp>
        );
}

const Wrapp = styled.main`
padding:15px;
margin-top:20px;
width: "100%";
flex-direction:column;
transform: scale(0.95);
`

const Dates = styled.div`
font-family: 'Inter';
font-style: italic;
font-size: 24px;
display: flex;
color: #000000;
width: 100%;
max-width: 400px;

justify-content: space-between;
gap: 16px; /* 요소들 간의 간격 설정 */
padding: 0 16px; /* 컨테이너 양 옆의 여백 추가 */

`

const Span = styled.span `
margin-top:20px;
display: flex;
justify-content: flex-start;
color:gray;
padding: 0 16px;
`

export default DateTimeDisplay;