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
    padding: 1vw;
`

const MovieP = styled.p`
    color: ${colors.white};
    font-size: 0.6vw;
    height: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
`

const MovieP2 = styled(MovieP)`
    height: 10%;
    white-space: nowrap;
`

const OverView = ({ title, overview }) => {
    return (
        <OverViewContainer>
            <MovieP2>{title}</MovieP2>
            <MovieP>{overview}</MovieP>
        </OverViewContainer>
    )
}

export default OverView;