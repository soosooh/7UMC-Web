import { useState, useEffect } from "react";
import { GoDotFill, GoDot } from "react-icons/go";
import styled from "styled-components";

const LoadingComp = () => {
    const [filledDots, setFilledDots] = useState(0); // 채워진 점의 개수

    useEffect(() => {
        let interval = setInterval(() => {
            setFilledDots((prev) => {
                if (prev < 5) {
                    return prev + 1; // 점을 하나씩 채움
                } else {
                    return 0; // 모두 채워지면 다시 초기화
                }
            });
        }, 200); // 200ms마다 실행 (1초 동안 5개의 점)

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    return (
        <Wrapp>
            <DotContainer>
                {[...Array(5)].map((_, index) => (
                    <span key={index}>
                        {index < filledDots ? <GoDotFill /> : <GoDot />}
                    </span>
                ))}
            </DotContainer>
            <h3>게시물을 불러오는 중입니다.</h3>
        </Wrapp>
    );
};

const Wrapp = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const DotContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
    span {
        font-size: 24px;
        margin: 0 4px;
        color: #333;
    }
`;

export default LoadingComp;
