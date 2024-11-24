import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Navbar = () =>{
    const {amount} = useSelector((state)=> state.cart);

    return(
        <Wrapp>
            ssssss
            <p>{amount}</p>
        </Wrapp>
    )
}

const Wrapp = styled.main`
width:100vw;
background: #6D6FFF;
color:white;
height: 60px;
`

export default Navbar;