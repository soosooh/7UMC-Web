import cartItems from "../constants/cartItems"
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem"
import { useDispatch, useSelector, useStore} from "react-redux"
import styled from "styled-components";
import Footer from "./CartFooter";

const CartContainer = () =>{
    const {cartItems,} = useSelector((store)=>store.cart);
    
    const store = useStore(); 

    // console.log("스토어 전체:", store.getState()); //스토어 상태 출력
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
            <Footer />
        </footer>
        </Wrapp>
    )
}
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