import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const SidebarComponent =() =>{
    const navigate = useNavigate();
    return (
        <Sidebar >
            <Search to='/search' onClick = {()=>navigate("/search")}>
                <FaSearch /> 찾기
            </Search>
            <MovieContainer>
                <MdMovie/> 영화
            </MovieContainer>
        </Sidebar>
    )
}
const Sidebar = styled.aside `
    position : fixed;
    top:60px;
    left:0;
    width : 180px;
    color : white;
    background-color: #413F3F;
    display:flex;
    height:100%;
`
const Search = styled.div `
`

export default SidebarComponent;
