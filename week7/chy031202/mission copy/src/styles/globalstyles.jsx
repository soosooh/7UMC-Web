import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    overflow:hidden;
    }
    .movieLi li .overview {
    display: none;
    color: white;
    position: relative;
    z-index: 2;
    }

    .movieLi li:hover::before{
    content: ''; 
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; 
    background-color: rgba(0, 0, 0, 0.7); 
    z-index: 1; 
    border-radius: 10px;

    }

    .movieLi li:hover .overview{
    content: ''; 
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; 
    z-index: 1; 
    display: block;
}
`;


export default GlobalStyle;