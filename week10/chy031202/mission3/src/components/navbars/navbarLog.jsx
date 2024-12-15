//import {Link} from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../contexts/LoginContext";

const NavbarLog = ({nickname}) => {
    const { logout } = useAuth();
    const isMobile = useMediaQuery({ maxWidth: 500 });
    
    return (
        <NavTag>
            <StyledLink to={'/'} >YONGCHA</StyledLink>
            
            {isMobile && (
                            <MobileIcons>
                                <FaSearch onClick={() => navigate("/search")} />
                                <MdMovie onClick={() => navigate("/category")} />
                                <FaMapLocation nClick = {()=>navigate("/map")}/>
                            </MobileIcons>
                        )}

            <ButtonStyle>
                <Name>{nickname} 님 반갑습니다.</Name>
                <Button  color="#413F3F" onClick={logout}>로그아웃</Button>
                
            </ButtonStyle>
        </NavTag>
    );
};

const MobileIcons = styled.div`
    margin-left: auto; /* 오른쪽 정렬 */
    display: flex;
    gap: 10px;

    svg {
        font-size: 24px;
        cursor: pointer;
        color: #FF073D;

        &:hover {
            color: white;
        }
    }
`;

const Name = styled.span `
color:white;
`

const NavTag = styled.div `
    width: 100%;
    
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
export default NavbarLog;