import {create} from "zustand";
import cartItems from "../../constants/cartItems";

export const useCartStore= create((set) => ({
    cartItems: cartItems,
    amount: 0,
    total: 0,
    name:'cart',
    increase: (payload) => 
        set((state) => {
            const itemId = payload;
            console.log(itemId, state.cartItems);

            // 클릭한 ID와 동일한 아이템 찾기
            const item = state.cartItems.find((cartItem) => cartItem.id === String(itemId));
            if (item) item.amount += 1;

            return { cartItems: [...state.cartItems] }; // 상태 업데이트
        }),
    //투두 감소
    decrease: (payload) =>
        set((state) => {
            const itemId = payload;
            console.log(itemId, state.cartItems);

            // 클릭한 ID와 동일한 아이템 찾기
            const item = state.cartItems.find((cartItem) => cartItem.id === String(itemId));
            if (item) item.amount -= 1;

            return { cartItems: [...state.cartItems] }; // 상태 업데이트
        }),

    //아이템 제거
    removeItem: (payload) =>
        set((state) => {
            const itemId = payload;
            const updatedCart = state.cartItems.filter((item) => item.id !== itemId);
            return { cartItems: updatedCart };
        }),

    //모든 아이템 제거
    //배열을 빈 배열로 만들면 된다.
    clearCart: () =>
        set(() => ({
            cartItems: [],
        })),

    //투두 토탈 계산
    calculateTotals: () =>
        set((state) => {
            let amount = 0;
            let total = 0;
    
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });

            if (state.amount === amount && state.total === total) {
                return state; // 변경이 없으면 업데이트하지 않음
            }

            return { ...state, amount, total };
        }),
}));
