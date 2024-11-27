import styled from 'styled-components';

export const HomeContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 20px;
`;

export const Header = styled.header`
  background-color: #5d5bf0;
  color: white;
  width: 100%;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -20px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: 30px;
`;

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 30px;
`;

export const CartItemCount = styled.div`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #ff6b6b;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 0.7rem;
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  margin-top: 30px;
  text-align: center;
  width: 65%;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const EmptyCartMessage = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid #ccc;
  margin: 13px 0;
`;

export const Footer = styled.footer`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 600px;
  margin-bottom: 20px;
  margin-top: -9px;
  font-size: 18px;
  font-weight: bold;
`;

export const TotalText = styled.div`
  text-align: left;
  margin-left: 8px;
`;

export const TotalPrice = styled.div`
  text-align: right;
`;

export const ClearCartButton = styled.button`
  background-color: #5d5bf0;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  align-self: center;
  
  &:hover {
    background-color: #7a77f2;
  }
`;
