import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";
const CartContainer = () => {
  const { cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <section className="cart">
      <header>
        <h2>당신이 선택한 음반</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            총 가격 <span>₩ {total}원</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            console.log("dispatch 호출 전");
            dispatch(openModal());
            console.log("dispatch 호출 후");
          }}
        >
          장바구니 초기화
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
