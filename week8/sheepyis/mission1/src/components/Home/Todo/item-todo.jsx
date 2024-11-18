import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../Button/Button";

const ItemContainer = styled.div`
    width: 100%;
    height: 4.5vw;
    background-color: ${colors.white};
    border: 0.1vw solid ${colors.inputColor};
    border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
`

const ToggleButton = styled.div`
    width: 1vw;
    height: 1vw;
    border: 0.05vw solid ${colors.black};
    border-radius: 0.15vw;
    cursor: pointer;
`

const TodoContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3vw;
    width: 60%;
`

const TodoP = styled.p`
    width: 100%;
    font-size: 0.9vw;
    font-weight: bold;
    color: ${colors.inputColor};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const ItemTodo = ({ title, content }) => {
    return (
        <ItemContainer>
            <ContentContainer>
                <ToggleButton />
                <TodoContentContainer>
                    <TodoP>{title}</TodoP>
                    <TodoP>{content}</TodoP>
                </TodoContentContainer>
                <Button width="6vw" height="2.5vw" text="수정" style={{backgroundColor: colors.buttonColor, color: colors.black}} />
                <Button width="6vw" height="2.5vw" text="삭제" style={{backgroundColor: colors.buttonColor, color: colors.black}} />
            </ContentContainer>
        </ItemContainer>
    )
}

export default ItemTodo;