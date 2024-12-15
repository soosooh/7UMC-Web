
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { isLoggedIn, logout, getNickname } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <YongchaNav>
            <span>
                <StyledRouterLink to='/'>
                    <LogoSpan>YONGCHA</LogoSpan>
                </StyledRouterLink>
            </span>
            <span>
                {isLoggedIn ? (
                    <>
                        <Nickname>
                            {getNickname()}님 환영합니다
                        </Nickname>
                        <StyledBtn 
                            color='red' 
                            color2='rgb(204,41,0)' 
                            onClick={handleLogout}
                        >
                            로그아웃
                        </StyledBtn>
                    </>
                ) : (
                    <>
                        <StyledRouterLink to='/login'>
                            <StyledBtn color2='rgb(48,48,48)'>로그인</StyledBtn>
                        </StyledRouterLink>
                        <StyledRouterLink to='/signup'>
                            <StyledBtn color='red' color2='rgb(204,41,0)'>회원가입</StyledBtn>
                        </StyledRouterLink>
                    </>
                )}
            </span>
        </YongchaNav>
    );
};


export default Navbar;

const YongchaNav = styled.nav`
    background-color: black;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1000;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 10px 20px;
        align-items: flex-start;
    }

    @media (max-width: 480px) {
        padding: 10px 15px; 
    }
`;

const LogoSpan = styled.span`
    color: red;
    font-size: 1.3em;
    font-weight: bold;
    padding: 5px;

    @media (max-width: 768px) {
        font-size: 1.1em;
    }

    @media (max-width: 480px) {
        font-size: 1em; 
    }
`;

const StyledBtn = styled.button`
    background-color: ${props => props.color || 'black'};
    border: 1px solid grey;
    border-radius: 0.4em;
    padding: 8px 14px;
    cursor: pointer;
    color: white;
    margin-right: 15px;

    @media (max-width: 768px) {
        padding: 6px 10px;
        font-size: 0.9em;
        margin-right: 10px;
        margin-bottom: 5px; 
    }

    @media (max-width: 480px) {
        padding: 5px 8px; 
    }
`;

const StyledRouterLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Nickname = styled.span`
    color: white;
    font-size: 1em;
    font-weight: bold;
    margin-right: 15px;

    @media (max-width: 768px) {
        font-size: 0.9em;
        margin-right: 10px;
    }

    @media (max-width: 480px) {
        font-size: 0.8em; 
    }
`;

