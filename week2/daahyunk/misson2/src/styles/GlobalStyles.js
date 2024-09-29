import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #232647;
    color: #fff;
  }

  #root {
    display: flex;
    justify-content: center;
    padding: 2vh;
  }
`;

export default GlobalStyles;
