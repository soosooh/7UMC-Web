import {createSlice} from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";
import { act } from "react";
import CartItem from "../../components/CartItem";

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        //투두 증가
        increase:(state, {payload}) =>{
            const itemId = payload;
            console.log(itemId, state.cartItems);

            //전체 음반 중 내가 클릭한 id랑 비교해서 같은 음반 찾아냄 
            
            const item = state.cartItems.find((cartItem) => cartItem.id === String(itemId));
            
            item.amount +=1;
        },
        //투두 감소
        decrease:(state, {payload}) =>{
            const itemId = payload;
            console.log(itemId, state.cartItems);

            //전체 음반 중 내가 클릭한 id랑 비교해서 같은 음반 찾아냄 
            const item = state.cartItems.find((cartItem) => cartItem.id === String(itemId));    
            item.amount -=1;
        },
        //아이템 제거
        removeItem: (state, {payload}) => {
            const itemId = payload;
            state.cartItems= state.cartItems.filter((item) => item.id!== itemId);
        },
        //모든 아이템 제거
        //배열을 빈 배열로 만들면 된다.
        clearCart: (state) =>{
            state.cartItems=[];
        },
        //투두 토탈 계산
        calculateTotals: (state) =>{
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) =>{
                amount += item.amount;
                total +=item.amount * item.price;
            })

            state.amount = amount;
            state.total = total;

        }
    }
})

export const {increase, decrease, removeItem, clearCart, calculateTotals} = cartSlice.actions;
export default cartSlice.reducer