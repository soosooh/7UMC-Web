import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";


const CategoryData = () => {
    const navigate = useNavigate();
return (
    <>
    <Container>
        <>
        <Cat style={{ backgroundImage: `url(${image1})` }}
            onClick={()=>navigate("/movies/now-playing")}>
            <Textbox>현재 상영중인</Textbox>
        </Cat>
        </>

        <>
        <Cat style={{ backgroundImage: `url(${image2})` }}  
        onClick={()=>navigate("/movies/popular")}>
        <Textbox>인기 있는</Textbox>
        </Cat>
        </>

        <>
        <Cat style={{ backgroundImage: `url(${image3})`}} 
        color="#CED8F6" onClick={()=>navigate("/movies/top-rated")}>
        <Textbox>높은 평가를 받은</Textbox>
        </Cat>
        </>

        <>
        <Cat style={{ backgroundImage: `url(${image4})`}} 
            color="#F5D0A9" onClick={()=>navigate("/movies/up-coming")}>
        <Textbox>개봉 예정중인</Textbox>
        </Cat>
        </>
    </Container>
    </>
)
}

const Container = styled.div`
    display: flex;  
    flex-direction: row;
    gap: 20px;
    width:85%;
    align-items: center;
    justify-content: center;
    
`;

const Textbox = styled.span `
    color: white;
    background-color: rgba(65, 63, 63, 0.3);
    border-radius:5px;
    padding : 10px;
    position: absolute;
    bottom : 10px;
    left : 10px;
`

const Cat = styled.div `
    position: relative;
    
    align-items:center;
    border-radius:10px;
    background-color : ${props => props.color};
    background-image: ${props => props.backgroundImage};
    width: 398.26px;
    height: 125px;
    align-items: center;
    
`

export default CategoryData;