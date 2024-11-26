import styled from "styled-components";
//import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import { useCartStore } from "../features/cart/cartStore";

const Footer = () =>{
    //const dispatch = useDispatch();
    //const {total} = useSelector((store)=>store.cart);
    const total = useCartStore((state)=>state.total)

    return(
        <>
        <hr />
            <h4>
                <Price>
                <span>총 가격</span>  <span>&nbsp; \ &nbsp;{total}</span>
                </Price>
            </h4>
            <Rebutton onClick={()=>{
                // dispatch(openModal());
            }}>장바구니 초기화</Rebutton>
        </>
    )
}

const Price = styled.footer`
display:flex;
width:100%;
justify-content: space-between;
`

const Rebutton = styled.button`
box-sizing: border-box;
width: 150px;
height: 30px;
background: #FFFFFF;
border: 3px solid #D20000;
border-radius: 5px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 24px;
cursor:pointer;
margin-bottom:30px;

color: #D20000;

`
export default Footer;