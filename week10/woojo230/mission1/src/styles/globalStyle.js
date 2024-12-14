import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
    min-width: 320px;
    overflow-x: hidden; /* 전체 페이지에서 좌우 스크롤 제거 */
  }
`;
