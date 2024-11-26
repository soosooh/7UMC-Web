import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import styled from "styled-components";
import { closeModal } from "../../features/modal/modalSlice";

const ModalPannel = () =>{
    const dispatch = useDispatch();
    //const {isOpen} = useSelector((state) =>state.modal);

    return(
        <ButtonWrapp>
        <Button onClick={()=>{
            dispatch(clearCart());
            //모달 꺼지는 상태 연결
            dispatch(closeModal());
            }}
            color="#6D6FFF"
        >네</Button>

        <Button onClick={()=>{
            //모달 꺼짐
            dispatch(closeModal());
        }}
        color="#D20000"
        >아니요</Button>
        </ButtonWrapp>
        
    )

}

const ButtonWrapp = styled.article`
display:flex;
margin-top:50px;
justify-content:space-between;
items-align:center;
width:75%;
`

const Button = styled.button`
box-sizing: border-box;
width: 80px;
height: 40px;
background:transparent;
color : ${({color}) =>color || "#6D6FFF"};
border: 3px solid ;
border-radius: 5px;
font-weight: 700;
font-size: 15px;
line-height: 24px;
text-align: center;
color: ${({color}) => color };
cursor:pointer;

`
export default ModalPannel;