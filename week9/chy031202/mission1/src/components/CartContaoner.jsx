import cartItems from "../constants/cartItems"
import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";
import CartItem from "./CartItem"
import { useDispatch, useSelector} from "react-redux"

const CartContainer = () =>{
    const {amount, cartItems, total} = useSelector((store)=>store.cart);
    const dispatch = useDispatch();
    return(
        <>
        <header>
            <h2>당신이 선택한 음반</h2>
        </header>
        <div>
            {cartItems.map((item) =>{
                return <CartItem key={item.id} {...item} />
            })}
        </div>
        <footer>
            <hr />
            <h4>총 가격<span> 7777원</span></h4>
            <button onClick={()=>{
                // dispatch(clearCart())
                dispatch(openModal());
            }}>장바구니 초기화</button>
        </footer>
        </>
    )
}

export default CartContainer