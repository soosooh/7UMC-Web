
import CartItem from "./CartItem"
import NotCart from "./modals/notcart";

import styled from "styled-components";
import Footer from "./CartFooter";
import React from "react";
import { useCartStore } from "../features/cart/cartStore";

const CartContainer = () =>{
    //const {cartItems,} = useSelector((store)=>store.cart);
    //const cartItems = useStore((state) =>state.cartItems);
    const cartItems = useCartStore((state) => state.cartItems); // Zustand 상태 가져오기
    const clearCart = useCartStore((state) => state.clearCart); // Zustand 메서드 예시
    const amount = useCartStore((state)=> state.amount);

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