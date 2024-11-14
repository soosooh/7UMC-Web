import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const SidebarComponent =() =>{
    const navigate = useNavigate();
    return (
        <Sidebar >
            <Search to='/search' onClick = {()=>navigate("/search")}>
                <FaSearch /> <span>찾기</span>
            </Search>
            <MovieContainer onClick = {()=>navigate("/category")}>
                <MdMovie /> 영화
            </MovieContainer>
        </Sidebar>
    )
}
const Sidebar = styled.aside `
    top:60px;
    left:0;
    width : 180px;
    color : white;
    background-color: #413F3F;
    display:flex;
    height:100%;
    flex-direction: column; /* 세로 정렬 */
    gap: 20px;
    padding-left : 20px;
    min-width:180px;
    

    @media (max-width: 760px) {
    
    font-size: 0.875rem;
    min-width:30px;
    transform-origin: top;
}
    
`
const Search = styled.div `
    
`
const MovieContainer = styled.div `
`

export default SidebarComponent;
