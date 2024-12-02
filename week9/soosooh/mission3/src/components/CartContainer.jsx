import zustandSlice from "../features/zustand/zustandSlice";
import CartItem from "./CartItem";
import styled from "styled-components";

const CartContainer = () => {
  const { cartItems, total, openModal } = zustandSlice();

  const isEmpty = cartItems.length === 0;

  return (
    <StyledSection className="cart">
      <header>
        <StyledTitle>당신이 선택한 음반</StyledTitle>
      </header>
      {isEmpty ? (
        <EmptyMessage>고객님이 좋아하는 음반을 담아보세요~!</EmptyMessage>
      ) : (
        <>
          <div>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <StyledFooter>
            <hr />
            <TotalDiv>
              <h4>총 가격</h4>
              <h4>₩ {total}원</h4>
            </TotalDiv>
            <ClearButton
              onClick={() => {
                openModal();
              }}
            >
              장바구니 초기화
            </ClearButton>
          </StyledFooter>
        </>
      )}
    </StyledSection>
  );
};

export default CartContainer;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const StyledTitle = styled.h2`
  color: black;
`;

const TotalDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  color: black;
`;

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const ClearButton = styled.button`
  color: #d20000;
  background-color: white;
  border-color: #d20000;
`;
const EmptyMessage = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #6d6fff;
  margin-top: 2rem;
  text-align: center;
`;
