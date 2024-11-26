import React from "react";
import ModalPannel from "./modalPannel";
import styled from "styled-components";

const Modal = ({children}) =>{
    return(
        <Aside>
            <ContentBox>
            {children}
            <ModalPannel/>
            </ContentBox>       
        </Aside>
    )
}

const ContentBox = styled.div`
display:flex;
flex-direction:column;
background:white;
width: 50vw;
height: 160px;
max-width:400px;
min-width: 270px;
background: #FFFFFF;
border-radius: 10px;
padding:40px;

align-items: center; 

`

const Aside = styled.aside`
background-color: rgb(0, 0, 0, 0.5);
position: fixed;
    top: 0;
    left: 0;
    width: 100vw;

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
`

export default Modal;