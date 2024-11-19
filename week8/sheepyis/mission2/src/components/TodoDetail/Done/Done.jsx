import styled from "styled-components";
import colors from "../../../styles/colors";

const DoneBox = styled.div`
    width: 5vw;
    height: 2vw;
    background-color: ${colors.buttonColor2};
    font-size: 1.2vw;
    font-weight: bold;
    border: none;
    border-radius: 2.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Done = ({ checked }) => {
    // console.log(checked);
    return (
        <DoneBox>{checked ? "완료" : "미완료"}</DoneBox>
    )
}

export default Done;