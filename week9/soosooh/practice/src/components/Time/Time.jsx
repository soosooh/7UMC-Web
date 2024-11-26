import React, { useState, useEffect } from "react";
import s from "./Time.module.css";

export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  const dayList = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const year = currentTime.getFullYear();
  const month = currentTime.getMonth() + 1;
  const date = currentTime.getDate();
  const day = dayList[currentTime.getDay()];

  // 숫자 형식으로 시간 표시
  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  const seconds = String(currentTime.getSeconds()).padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;

  return (
    <div className={s.timeContainer}>
      <div className={s.date}>
        <strong
          className={s.dateText}
        >{`${year}년 ${month}월 ${date}일`}</strong>
        <span className={s.day}>{day}</span>
      </div>
      <div className={s.clock}>{time}</div>
    </div>
  );
}
