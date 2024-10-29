//import {Link} from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <NavTag>
            <StyledLink to={'/'} >YONGCHA</StyledLink>

            <ButtonStyle>
                <Button  color="#413F3F" onClick={() => navigate("/login")}>로그인</Button>
                <Button color="#FF073D" onClick={()=> navigate("/signup")}>회원가입</Button>
            </ButtonStyle>
        </NavTag>
    );
};



const NavTag = styled.div `
    width: 100%;
    position : fixed;
    top:0;
    left:0;
    height : 60px;
    color: #FF073D;
    background-color:#413F3F;
    z-index: 300;
    display: flex;
    align-items:center;
`

const ButtonStyle = styled.div `
    margin-left: auto;
`
const Button = styled.button `
    
    width: 72.73px;
    height: 41.82px;
    top:9px;
    border-radius:10px;
    border-style:none;
    color:white;
    background-color : ${props => props.color};
    &:hover {
		color:black;
        background-color:white;
	}
`

const StyledLink = styled(Link)`
    color: #FF073D;
    text-decoration: none; 
    padding: 15px;
    left:18px;
    font-size: 20px;
    text-align: center;
    
`;
export default Navbar;