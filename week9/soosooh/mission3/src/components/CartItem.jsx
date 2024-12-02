import styled from "styled-components";
import zustandSlice from "../features/zustand/zustandSlice";

const CartItem = ({ id, title, singer, price, img, amount }) => {
  const { increase, decrease, removeItem } = zustandSlice();

  return (
    <StyledArticle>
      <StyledDiv>
        <img src={img} alt={`${title} 이미지`} />
        <div>
          <h4>
            {title} | {singer}
          </h4>
          <StyledH>₩ {price}</StyledH>
        </div>
      </StyledDiv>
      <ButtonDiv>
        <StyledButton className="amount-btn" onClick={() => increase(id)}>
          ▲
        </StyledButton>
        <StyledP className="amount">{amount}</StyledP>

        <StyledButton
          onClick={() => {
            if (amount === 1) {
              removeItem(id);
              return;
            }
            decrease(id);
          }}
        >
          ▼
        </StyledButton>
      </ButtonDiv>
    </StyledArticle>
  );
};

export default CartItem;

const StyledArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  color: black;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 20px;
    align-items: flex-start;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const StyledH = styled.h4`
  margin: 0;
`;

const StyledButton = styled.button`
  all: unset;
  color: #6d6fff;
`;
const StyledP = styled.p`
  margin: 0;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
