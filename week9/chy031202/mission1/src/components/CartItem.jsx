import { useDispatch } from "react-redux";
import styled from "styled-components";
import { increase, decrease, removeItem } from "../features/cart/cartSlice";

const CartItem = ({ title, singer, price, img, amount , id})=>{
    const dispatch = useDispatch();
    return(
        <>
        {title} {singer} {price} {img}
        <hr />
        <button onClick={()=> dispatch(increase(id))}> 증가
        </button>{amount}
        <button onClick={()=> {
            if(amount ===1){
                dispatch(removeItem(id));
                return;
            }
            dispatch(decrease(id));
        }}> 감소
        </button>
        </>
    )
}

export default CartItem;