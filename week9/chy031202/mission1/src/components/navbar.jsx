import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () =>{
    const {amount} = useSelector((state)=> state.cart);

    return(
        <Wrapp>
            <Header className ='header'>UMC PlayList</Header>
            <Div>
                <FiShoppingCart style={{minWidth:'25px', minHeight:'25px'}}/>
                <Calc>{amount}</Calc>
            </Div>
        </Wrapp>
    )
}

const Wrapp = styled.main`
width:100vw;
background: #6D6FFF;
color:white;
height: 60px;
top:0;
display:flex;
align-items: center;

`
const Header = styled.header`
margin-right:auto;
left: 254px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
margin-left:15%;

color: #FFFFFF;
`

const Calc= styled.p`

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 29px;
/* identical to box height */
position:absolute;
top:-30px;
right: -10px; 

color: #FFFFFF;


`

const Div = styled.div`
position: relative;
display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10%; 
  width:30px;
  height:30px;
`

export default Navbar;