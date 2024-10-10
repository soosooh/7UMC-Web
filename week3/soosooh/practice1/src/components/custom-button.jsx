import styled from "styled-components";

const CustomButton = () => {
  return (
    <>
      <FirstStyledSweetPotato color={"purple"}>
        보라 고구마 버튼
      </FirstStyledSweetPotato>
      <FirstStyledSweetPotato color={"orange"}>
        주황 고구마 버튼
      </FirstStyledSweetPotato>
      <FirstStyledSweetPotato>고구마 버튼</FirstStyledSweetPotato>
    </>
  );
};

export default CustomButton;

const FirstStyledSweetPotato = styled.button`
  background-color: ${(props) => props.color || "purple"};
  //   예외처리 || 해주기.
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;
