import styled from 'styled-components';

export const CartContainer = styled.div`
  padding: 20px;
  margin: 0 50px;
  background-color: white;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 15px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
`;

export const ItemDetails = styled.div`
  h3 {
    font-size: 16px;
    color: #333;
    margin: 0;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #555;
    margin: 5px 0 0;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 10px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`;

export const ControlButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #6f73f9;

  &:hover {
    color: #4e51d1;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid #ddd;

  strong {
    font-size: 16px;
    color: #333;
  }
`;

export const ClearButton = styled.button`
  background-color: transparent;
  color: #f44336;
  border: 1px solid #f44336;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 17px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #f44336;
    color: white;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
