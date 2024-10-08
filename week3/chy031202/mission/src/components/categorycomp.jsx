import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";


const CategoryData = () => {
    const navigate = useNavigate();
return (
    <>
    <Container>
        <Cat backgroundImage="url('https://media.discordapp.net/attachments/1068483962772652107/1293113165516898346/image1.png?ex=670630fb&is=6704df7b&hm=2abfd12bab81eb5126e1819a6406baf37da5129ddad611971424d8c6822e546b&=&format=webp&quality=lossless&width=607&height=324')"
            onClick={()=>navigate("/movies/now-playing")}>
            <Textbox>현재 상영중인</Textbox>
        </Cat>

        <Cat backgroundImage="url('https://media.discordapp.net/attachments/1068483962772652107/1293113165923487764/image2.png?ex=670630fb&is=6704df7b&hm=c8f756eafbe55333bf88e4b88dc90865908dd504db3f589d3767e5c5fd3ecde8&=&format=webp&quality=lossless&width=909&height=384')"  
        onClick={()=>navigate("/movies/popular")}>
        <Textbox>인기 있는</Textbox>
        </Cat>

        <Cat backgroundImage="url('https://media.discordapp.net/attachments/1068483962772652107/1293113166246580247/image3.png?ex=670630fb&is=6704df7b&hm=075ced0e55f8e558aff81b3d32ca77099d0101fc15dfc680ec46e6fffd3a4ece&=&format=webp&quality=lossless&width=919&height=348')" 
        color="#CED8F6" onClick={()=>navigate("/movies/top-rated")}>
        <Textbox>높은 평가를 받은</Textbox>
        </Cat>

        <Cat backgroundImage="url('https://media.discordapp.net/attachments/1068483962772652107/1293113166494040127/image4.png?ex=670630fb&is=6704df7b&hm=070a7be7c59ae54ea6727d4bccf2e58025cf702afb13cb9318243784579bf655&=&format=webp&quality=lossless&width=922&height=433')"
            color="#F5D0A9" onClick={()=>navigate("/movies/up-coming")}>
        <Textbox>개봉 예정중인</Textbox>
        </Cat>
    </Container>
    </>
)
}

const Container = styled.div`
    display: flex;  
    flex-direction: row;
    gap: 20px;      
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
    width: 100%;
    align-items:center;
    border-radius:10px;
    background-color : ${props => props.color};
    background-image: ${props => props.backgroundImage};
    width: 398.26px;
    height: 125px;
    align-items: center;
    
`

export default CategoryData;