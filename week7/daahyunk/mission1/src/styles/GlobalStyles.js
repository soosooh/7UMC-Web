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
    width: 100%;
    height: 100vh;
    margin: 0;
    overflow-x: hidden; /* 수평 스크롤 숨김 */
  }

  #root {
    width: 100vw; /* 전체 화면 너비를 채움 */
    height: 100vh;
    display: flex;
    flex-direction: column; /* 네비바와 메인 컨텐츠가 수직으로 배치되도록 설정 */
  }
`;


export default GlobalStyles;


