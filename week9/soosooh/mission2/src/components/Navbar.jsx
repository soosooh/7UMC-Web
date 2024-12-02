import { useSelector } from "react-redux";
import { useEffect } from "react";
import { CartIcon } from "../constants/icons";
import styled from "styled-components";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav>
      <NavCenter>
        <h3>UMC PlayList</h3>
        <NavContainer>
          <AmountContainer>
            <TotalAmount>{amount}</TotalAmount>
          </AmountContainer>
          <CartIcon color="white" size="2rem" />
        </NavContainer>
      </NavCenter>
    </nav>
  );
};

export default Navbar;

const NavCenter = styled.div`
  background-color: #6d6fff;
  display: flex;
  width: 100vw;
  height: 4rem;
  justify-content: space-around;
  color: white;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TotalAmount = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
`;

const AmountContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 50%;
  background-color: #d7d7d7;
  padding: 0.2rem;
  align-items: center;
  justify-content: center;
`;
