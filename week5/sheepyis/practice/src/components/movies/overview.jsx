import styled from "styled-components";
import colors from "../../styles/colors";

const OverViewContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${colors.black};
    opacity: 0.8;
    border: none;
    border-radius: 0.5vw;
    padding: 0.5vw;
    cursor: pointer;
`

const OverViewP = styled.p`
    color: ${colors.white};
    font-size: 0.6vw;
    height: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
`

const OverViewP2 = styled(OverViewP)`
    height: 10%;
    white-space: nowrap;
`

const OverView = ({ title, overview }) => {
    return (
        <OverViewContainer>
            <OverViewP2>{title}</OverViewP2>
            <OverViewP>{overview}</OverViewP>
        </OverViewContainer>
    )
}

export default OverView;