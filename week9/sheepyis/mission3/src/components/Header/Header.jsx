import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CartIcon } from "../../constants/icons";
import colors from "../../styles/colors";
import useCartStore from "../../features/cart/cartSlice";

const HeaderContainer = styled.div`
  background-color: ${colors.headerBackground};
  width: 100%;
  height: 3vw;
  display: flex;
  justify-content: center;
`;

const HeaderInnerContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderP = styled.p`
  font-size: 1.2vw;
  font-weight: bold;
  color: ${colors.white};
  cursor: pointer;
`;

const IconContainer = styled.div`
  width: 2.1vw;
  height: 1.9vw;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const IconP = styled.p`
  font-size: 1.2vw;
  color: ${colors.white};
  font-weight: bold;
  position: absolute;
  margin-left: 3vw;
`;

const Header = () => {
  const navigate = useNavigate();
  const amount = useCartStore((state) => state.amount);

  const handleLogo = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <HeaderP onClick={handleLogo}>UMC Playlist</HeaderP>
        <IconContainer>
          <CartIcon />
          <IconP>{amount}</IconP>
        </IconContainer>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
};

export default Header;
