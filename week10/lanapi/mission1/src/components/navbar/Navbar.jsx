// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

// const Navbar = () => {
//     const { isLoggedIn, logout, getNickname, userInfo } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logout();
//         navigate("/");
//     };

//     return (
//         <YongchaNav>
//             <LogoWrapper>
//                 <StyledRouterLink to="/">
//                     <LogoSpan>YONGCHA</LogoSpan>
//                 </StyledRouterLink>
//             </LogoWrapper>
//             <NavActions>
//                 {isLoggedIn ? (
//                     <>
//                         <Nickname>
//                             {getNickname()}님 환영합니다
//                         </Nickname>
//                         <StyledBtn
//                             $color="red"
//                             $color2="rgb(204,41,0)"
//                             onClick={handleLogout}
//                         >
//                             로그아웃
//                         </StyledBtn>
//                     </>
//                 ) : (
//                     <>
//                         <StyledRouterLink to="/login">
//                             <StyledBtn $color2="rgb(48,48,48)">로그인</StyledBtn>
//                         </StyledRouterLink>
//                         <StyledRouterLink to="/signup">
//                             <StyledBtn $color="red" $color2="rgb(204,41,0)">
//                                 회원가입
//                             </StyledBtn>
//                         </StyledRouterLink>
//                     </>
//                 )}
//             </NavActions>
//         </YongchaNav>
//     );
// };

// const YongchaNav = styled.nav`
//     background-color: black;
//     height: 70px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0 20px;
//     position: sticky;
//     top: 0;
//     width: 100%;
//     z-index: 1000;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//     @media (max-width: 768px) {
//         height: auto;
//         padding: 12px 20px;
//         flex-wrap: wrap;
//     }
// `;

// const LogoWrapper = styled.div`
//     flex: 0 0 auto;
// `;

// const NavActions = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 15px;

//     @media (max-width: 768px) {
//         gap: 10px;
//         flex-wrap: wrap;
//     }
// `;

// const LogoSpan = styled.span`
//     color: red;
//     font-size: 1.3em;
//     font-weight: bold;
//     padding: 5px;
//     transition: color 0.2s ease;

//     &:hover {
//         color: #ff3333;
//     }

//     @media (max-width: 768px) {
//         font-size: 1.1em;
//     }
// `;

// const StyledBtn = styled.button`
//     background-color: ${(props) => props.$color || "black"};
//     border: 1px solid grey;
//     border-radius: 0.4em;
//     padding: 8px 14px;
//     cursor: pointer;
//     color: white;
//     transition: all 0.2s ease;

//     &:hover {
//         background-color: ${(props) => props.$color2 || "rgb(48,48,48)"};
//         transform: translateY(-1px);
//     }

//     &:active {
//         transform: translateY(0);
//     }

//     @media (max-width: 768px) {
//         padding: 6px 10px;
//         font-size: 0.9em;
//     }
// `;

// const StyledRouterLink = styled(Link)`
//     text-decoration: none;
//     color: inherit;
// `;

// const Nickname = styled.span`
//     color: white;
//     font-size: 1em;
//     font-weight: bold;
//     padding: 0 10px;

//     @media (max-width: 768px) {
//         font-size: 0.9em;
//     }
// `;

// const UserDetails = styled.div`
//     color: white;
//     font-size: 0.9em;
//     line-height: 1.5;

//     @media (max-width: 768px) {
//         font-size: 0.8em;
//     }
// `;

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect } from "react";  // useEffect 추가
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const { isLoggedIn, logout, getNickname, user } = useContext(AuthContext);
    const navigate = useNavigate();

    // 디버깅용 useEffect
    useEffect(() => {
        console.log('Navbar rendered with user:', user);
        console.log('isLoggedIn:', isLoggedIn);
        console.log('nickname:', getNickname());
    }, [user, isLoggedIn, getNickname]);  // getNickname도 의존성 배열에 추가

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <YongchaNav>
            <LogoWrapper>
                <StyledRouterLink to="/">
                    <LogoSpan>YONGCHA</LogoSpan>
                </StyledRouterLink>
            </LogoWrapper>
            <NavActions>
                {isLoggedIn ? (
                    <>
                        <Nickname>
                            {getNickname()}님 환영합니다
                        </Nickname>
                        <StyledBtn
                            $color="red"
                            $color2="rgb(204,41,0)"
                            onClick={handleLogout}
                        >
                            로그아웃
                        </StyledBtn>
                    </>
                ) : (
                    <>
                        <StyledRouterLink to="/login">
                            <StyledBtn $color2="rgb(48,48,48)">로그인</StyledBtn>
                        </StyledRouterLink>
                        <StyledRouterLink to="/signup">
                            <StyledBtn $color="red" $color2="rgb(204,41,0)">
                                회원가입
                            </StyledBtn>
                        </StyledRouterLink>
                    </>
                )}
            </NavActions>
        </YongchaNav>
    );
};

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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        height: auto;
        padding: 12px 20px;
        flex-wrap: wrap;
    }
`;

const LogoWrapper = styled.div`
    flex: 0 0 auto;
`;

const NavActions = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: 768px) {
        gap: 10px;
        flex-wrap: wrap;
    }
`;

const LogoSpan = styled.span`
    color: red;
    font-size: 1.3em;
    font-weight: bold;
    padding: 5px;
    transition: color 0.2s ease;

    &:hover {
        color: #ff3333;
    }

    @media (max-width: 768px) {
        font-size: 1.1em;
    }
`;

const StyledBtn = styled.button`
    background-color: ${(props) => props.$color || "black"};
    border: 1px solid grey;
    border-radius: 0.4em;
    padding: 8px 14px;
    cursor: pointer;
    color: white;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${(props) => props.$color2 || "rgb(48,48,48)"};
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 6px 10px;
        font-size: 0.9em;
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
    padding: 0 10px;

    @media (max-width: 768px) {
        font-size: 0.9em;
    }
`;

const UserDetails = styled.div`
    color: white;
    font-size: 0.9em;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 0.8em;
    }
`;

export default Navbar;