import cartItems from "../constants/cartItems"
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem"
import { useDispatch, useSelector, useStore} from "react-redux"
import styled from "styled-components";
import Footer from "./CartFooter";
import NotCart from "./modals/notcart";

const CartContainer = () =>{
    const {cartItems,amount} = useSelector((store)=>store.cart);
    
    const store = useStore(); 

    // console.log("스토어 전체:", store.getState()); //스토어 상태 출력
    return(
        <Wrapp>
        <Header>
            <h2>당신이 선택한 음반</h2>
        </Header>
        {amount > 0 ? (
                    <Contents style={{ width: "65vw" }}>
                        {cartItems.map((item) => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </Contents>
                ) : (
                    <NotCart /> // amount가 0일 때 NotCart 컴포넌트 렌더링
                )}

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