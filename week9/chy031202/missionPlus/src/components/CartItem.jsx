
import styled from "styled-components";
import { TbTriangleFilled } from "react-icons/tb";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { useCartStore } from "../features/cart/cartStore";

const CartItem = ({ title, singer, price, img, amount , id})=>{
    //const dispatch = useDispatch();
    const increase = useCartStore((state) => state.increase); // Zustand 메서드 가져오기
    const decrease = useCartStore((state) => state.decrease);
    const removeItem = useCartStore((state) => state.removeItem);


    const store = useCartStore(); 
    console.log("전체 Zustand 상태:", store); // Zustand 상태 객체 출력

    return(
        <CompWrapp>
            <Img src={img} alt="{img}"/>
            <Titles>
                <Span>{title} | {singer}</Span><br/>
                \ {price}
            </Titles>
            <ButtonComp>
                <Button onClick={()=> increase(id)}> <TbTriangleFilled color="#6D6FFF"/></Button>
                {amount}
                <Button onClick={()=> {
                if(amount ===1){
                    removeItem(id);
                    return;
                }
                decrease(id);
                }}> <TbTriangleInvertedFilled color="#6D6FFF"/>
                </Button>
            </ButtonComp>
            {/* <hr /> */}
        </CompWrapp>      
        
    )
}

const Img=styled.img`
width:80px;
height:80px;
`

const CompWrapp= styled.div`
display:flex;
flex-direction:row;
margin-bottom:30px;
`

const ButtonComp = styled.article`
display:flex;
flex-direction:column;
text-align: center;
justify-content: center;
gap:3px;
margin-left: auto;
`

const Button = styled.button`
border:none;
background: transparent;
cursor:pointer;
`


const Titles = styled.article`
display: flex; 
justify-content: flex-start; 
flex-direction:column;
  text-align: left; /* 텍스트는 왼쪽 정렬 */
margin-left:20px;
`
const Span = styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
text-align: left;
left:0;
max-width:545px;
`


export default CartItem;