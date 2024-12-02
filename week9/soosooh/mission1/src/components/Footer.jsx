import styled from "styled-components";

const Footer = () => {
  return (
    <StyledNav>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>University MakeUs Challenge</h3>
      </div>
    </StyledNav>
  );
};

export default Footer;

const StyledNav = styled.nav`
  color: black;
  width: 100%;
`;
