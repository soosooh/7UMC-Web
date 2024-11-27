import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";
const ModalButton = () => {
  const dispatch = useDispatch();
  //const { isOpen } = useSelector((state) => state.modal);
  return (
    <div className="btn-container">
      <button
        type="button"
        className="btn confirm-btn"
        onClick={() => {
          console.log("장바구니 초기화");
          dispatch(clearCart());
          //TODO : 모달도 꺼지는 상태를 연결
          dispatch(closeModal());
        }}
      >
        네
      </button>
      <button
        type="button"
        className="btn clear-btn"
        onClick={() => {
          //TODO : 모달도 꺼지는 상태를 연결
          console.log("모달 닫기");
          dispatch(closeModal());
        }}
      >
        아니요
      </button>
    </div>
  );
};

export default ModalButton;
