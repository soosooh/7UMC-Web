import styled from "styled-components";

const TimeP = styled.p`
    font-size: 0.7vw;
    font-weight: bold;
`

const Time = ({ updatedAt }) => {
    return (
        <TimeP>{updatedAt}</TimeP>
    )
}

export default Time;