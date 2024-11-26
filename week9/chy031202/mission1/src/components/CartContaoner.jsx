import cartItems from "../constants/cartItems"
import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";
import CartItem from "./CartItem"
import { useDispatch, useSelector} from "react-redux"
import styled from "styled-components";

const CartContainer = () =>{
    const {amount, cartItems, total} = useSelector((store)=>store.cart);
    const dispatch = useDispatch();
    return(
        <Wrapp>
        <Header>
            <h2>당신이 선택한 음반</h2>
        </Header>
        <Contents style={{width:'65vw',}}>
            {cartItems.map((item) =>{
                return <CartItem key={item.id} {...item} />
            })}
        </Contents>
        <footer>
            <hr />
            <h4>
                <Price>
                <span>총 가격</span>  <span> 7777원</span>
                </Price>
            </h4>
            <Rebutton onClick={()=>{
                dispatch(openModal());
            }}>장바구니 초기화</Rebutton>
        </footer>
        </Wrapp>
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

const Header = styled.header`
margin-top:40px;
margin-bottom:40px;
`

const Wrapp = styled.main`
display:flex;
flex-direction:column;
`

const Contents = styled.article`
margin-right:auto;
`

export default CartContainer