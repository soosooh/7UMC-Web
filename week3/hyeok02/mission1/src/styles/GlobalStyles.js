import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: black;
    color: white;
    font-family: 'Inter', system-ui, sans-serif;
    line-height: 1.6;
    font-weight: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    font-feature-settings: 'kern';
    
   
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    }
  }
`;

export default GlobalStyle;
